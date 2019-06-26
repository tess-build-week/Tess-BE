const auth = require('../../server');
const supertest = require('supertest');
const db = require('../dbConfig');

describe('authRouter', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('get /', () => {
        it('responds with 200, OK', async () => {
            await supertest(auth)
                .get('/auth/')
        })
    })
    describe('post /register', () => {
        it('responds with a 201, Created, and a JSON', async () => {
            const credentials = {
                username: 'Tom',
                password: 'password'
            }
            await supertest(auth)
                .post('/auth/register')
                .send(credentials)
                .expect(201)
                .expect('Content-Type', /json/i);
        })
    })
    describe('post /login', () => {
        it('responds with a 200, OK + a JSON', async () => {
            const user = {
                username: 'George',
                password: 'password'
            }
            await supertest(auth)
                .post('/auth/register')
                .send(user)
            await supertest(auth)
                .post('/auth/login')
                .send({
                    username: 'George',
                    password: 'password'
                })
                .expect(200)
                .expect('Content-Type', /json/i);
        })
        it('responds with a 401 when an incorrect password is entered', async () => {
            await supertest(auth)
                .post('/auth/login')
                .send({
                    username: 'Bill',
                    password: 'wrongpassword'
                })
                .expect(401)
        })
        it('responds with a token', async () => {
            const user = {
                username: 'George',
                password: 'password'
            }
            await supertest(auth)
                .post('/auth/register')
                .send(user)
            await supertest(auth)
                .post('/auth/login')
                .send({
                    username: 'George',
                    password: 'password'
                })
                .then(res => {
                    expect(res.body.token).toBeTruthy();
                })
        })
    })
    describe('get /tokenTest', () => {
        it('returns a 401 if no token is present in headers', async () => {
            await supertest(auth)
                .get('/auth/tokenTest')
                .expect(401);
        })
        it('returns a 404 if an invalid token is present in headers', async () => {
            await supertest(auth)
                .get('/auth/tokenTest')
                .set({ authorization: 'notarealtoken '})
                .expect(404);
        })
        it('returns 200, OK and a JSON if token is present in header', async () => {
            const user = {
                username: 'George',
                password: 'password'
            }
            await supertest(auth)
                .post('/auth/register')
                .send(user)
            await supertest(auth)
                .post('/auth/login')
                .send({
                    username: 'George',
                    password: 'password'
                })
                .then(res => {
                    return supertest(auth)
                        .get('/auth/tokenTest')
                        .set({ authorization: res.body.token})
                        .expect(200)
                        .expect('Content-Type', /json/i)
                })
        })
    })
})