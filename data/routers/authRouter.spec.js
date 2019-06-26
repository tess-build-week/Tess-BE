const auth = require('./authRouter');
const supertest = require('supertest');

describe('authRouter', () => {
    describe('post /register', () => {
        it('responds with a 201, Created', async () => {
            const credentials = {
                username: 'Tom',
                password: 'password'
            }
            await supertest(auth)
                .post('/auth/register')
                .send(credentials)
            //     .expect(201);
        })
    })
})


//         it('returns a JSON', async () => {
//             const user = {
//                 username: 'Bill',
//                 password: 'password'
//             }
//             await supertest(auth)
//                 .post('register')
//                 .send(user)
//                 .expect('Content-Type', /json/i);
//         })
//     })
//     describe('post /login', () => {
//         it('responds with a 200, OK + a JSON', async () => {
//             await supertest(auth)
//                 .post('/auth/login')
//                 .send({
//                     username: 'Bill',
//                     password: 'password'
//                 })
//                 .expect(200)
//                 .expect('Content-Type', /json/i);
//         })
//         it('responds with a 401 when an incorrect password is entered', async () => {
//             await supertest(auth)
//                 .post('/auth/login')
//                 .send({
//                     username: 'Bill',
//                     password: 'wrongpassword'
//                 })
//                 .expect(401)
        // })