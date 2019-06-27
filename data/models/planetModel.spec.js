const db = require('../dbConfig.js');
const model = require('./planetModel');


describe('planetModel', () => {
    describe('find(lim, off)', () => {
        it('returns a list of planets, given a limit and offset', async () => {
            const find = await model.find(1, 0)
            expect(find).toHaveLength(1);
        })
        it('returns planets with variable limits', async () => {
            const one = await model.find(1,0);
            const two = await model.find(2,0);
            const three = await model.find(3,0);
            expect(one).toHaveLength(1);
            expect(two).toHaveLength(2);
            expect(three).toHaveLength(3);
        })
    })
    describe('findById(planetid)', () => {
        it('returns a planet based on the given planetid', async () => {
            const examplePlanetid = 'HIP 65407 c';
            const received = await model.findById(examplePlanetid);
            expect(received.planetid).toEqual(examplePlanetid);
        })
    })
})