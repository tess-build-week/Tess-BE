const supertest = require('supertest');
const server = require('./server');

describe('server', () => {
    describe('get /', () => {
        it('Environment should be set to testing', () => {
            expect(process.env.DB_ENV).toBe('testing');
        })
        it('responds with 200, OK.', () => {
            return supertest(server)
                .get('/')
                .expect(200)
        });

        it('responds with { api: Online }', () => {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({api: 'Online'});
                });
        });
    });
})