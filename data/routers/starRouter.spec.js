const server = require('../../server');
const supertest = require('supertest');
const db = require('../dbConfig');


describe('starRouter', () => {
    describe('get /stars/', () => {
        it('responds with 200, OK, and a JSON', async () => {
            await supertest(server)
                .get('/stars/')
                .expect(200)
                .expect('Content-Type', /json/i)
        })
        it('responds with a default limit of 10', async () => {
            await supertest(server)
                .get('/stars/')
                .then(res => {
                    expect(res.body).toHaveLength(10);
                })
        })
        it('responds with variable limit of data when passed a limit', async () => {
            await supertest(server)
                .get('/stars/')
                .send({
                    limit: 5,
                    offset: 0
                })
                .then(res => {
                    expect(res.body).toHaveLength(5);
                })

            await supertest(server)
                .get('/stars/')
                .send({
                    limit: 2,
                    offset: 0
                })
                .then(res => {
                    expect(res.body).toHaveLength(2);
                })
        })
    })
    describe('get /stars/:id', () => {
        it('responds with 200, OK, and JSON', async () => {
            const exampleTessId = 90953987;
            await supertest(server)
            .get(`/stars/${exampleTessId}`)
            .expect(200)
            .expect('Content-Type', /json/i)
        })
        it('responds with 404 when passed an invalid Tess ID', async () => {
                const exampleTessId = 123456;
                await supertest(server)
                    .get(`/stars/${exampleTessId}`)
                    .expect(404);
        })
    })
    describe('get /stars/:id/planets', () => {
        it('returns 200, OK, with a JSON', async () => {
            const exampleTessId = 90953987;
            await supertest(server)
                .get(`/stars/${exampleTessId}/planets`)
                .expect(200)
                .expect('Content-Type', /json/i)
        })
        it('responds with a 404, Not found, when passed an invalid Tess ID', async () => {
            const exampleTessId = 123456;
            await supertest(server)
                .get(`/stars/${exampleTessId}/planets`)
                .expect(404);
        })
        it('returns planets associated with given tess id', async () => {
            const exampleTessId = 90953987
            await supertest(server)
                .get(`/stars/${exampleTessId}/planets`)
                .then(res => {
                    expect(res.body[0].star_tessid).toBe(exampleTessId);
                })
        })
    })
})