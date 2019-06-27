const db = require('../dbConfig.js');
const model = require('./starModel');
require('jest-extended');

describe('starModel', () => {
    describe('find(lim, off)', () => {
        it('returns an array of objects, given a limit and offset', async () => {
            const returned = await model.find(1, 0)
            expect(returned).toBeArray();
        })
        it('returns an array of size x based on the limit given', async () => {
            const returnone = await model.find(1, 0);
            const returntwo = await model.find(2, 0);
            const returnthree = await model.find(3, 0);

            expect(returnone).toBeArrayOfSize(1);
            expect(returntwo).toBeArrayOfSize(2);
            expect(returnthree).toBeArrayOfSize(3);
        })
    })
    describe('findByTessId(id)', () => {
        it('returns an object', async () => {
            exampleTessId = 90953987
            const returned = await model.findByTessId(exampleTessId);
            expect(returned).toBeObject();
        })
        it('returns the star info that matches the Tess Id given', async () => {
            exampleTessId = 90953987;
            const returned = await model.findByTessId(exampleTessId);
            expect(returned.tessid).toEqual(exampleTessId);
        })
    })
    describe('findPlanetsByTessId(tessid)', () => {
        it('returns an array', async () => {
            exampleTessId = 90953987;
            const returned = await model.findPlanetsByTessId(exampleTessId);
            expect(returned).toBeArray();
        })
        it('returns planets associated with the tess id provided', async () => {
            exampleTessId = 90953987;
            const returned = await model.findPlanetsByTessId(exampleTessId);
            expect(returned[0].star_tessid).toEqual(exampleTessId);
        })
    })
})

