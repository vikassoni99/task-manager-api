const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { response } = require('express')
const { userOne, userOneId, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Vikas',
        email: 'vikassoni.soni22@gmail.com',
        password: 'examplepass'
    }).expect(201)

    //Assert that the DB is changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()
    //Assert response body
    expect(response.body).toMatchObject({
        user: {
            name: "Vikas",
            email: 'vikassoni.soni22@gmail.com'
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('examplepass')
})

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(response.body.user._id)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'sbdsjsdhjcv'
    }).expect(400)
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should not delete unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should upload profile avatar', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: "New Vikas"
        })
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.name).toEqual('New Vikas')
})

test('Should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: "New Vikas"
        })
        .expect(400)
})