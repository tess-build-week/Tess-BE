const server = require('../../server');
const supertest = require('supertest');
const db = require('../dbConfig');


describe('planetRouter', () => {
    // beforeEach(async () => {
    //     await db('planets').truncate();
    // });
    describe('get /planets', () => {
        it('returns 200, OK with a JSON', async () => {
            await supertest(server)
                .get('/planets/')
                .expect(200)
                .expect('Content-Type', /json/i)
        })
        it('defaults to a limit of 10 results', async () => {
            await supertest(server)
                .get('/planets/')
                .then(res => {
                    expect(res.body).toHaveLength(10);
                })
        })
        it('changes limit to x when passed req.body.limit', async () => {
            await supertest(server)
                .get('/planets/')
                .send({
                    limit: 5,
                    offset: 0,
                })
                .then(res => {
                    expect(res.body).toHaveLength(5);
                })
        })
    })
    describe('get planets/id', () => {
        it('returns 200, OK with a JSON', async () => {
            const planets = await supertest(server)
                .get('/planets/')
            //console.log(planets.body[0]);
             await supertest(server)
                 .get('/planets/id')
                 .send({
                     id: planets.body[0].planetid
                 })
                 .expect(200)
                 .expect('Content-Type', /json/i)
        })
        it("returns the given planetid's info", async () => {
            const planets = await supertest(server)
                .get('/planets/')

            const given = planets.body[0].planetid
            const received = await supertest(server)
                .get('/planets/id')
                .send({
                    id: given
                })
                expect(received.body.planetid).toBe(given);
        })
    })
})