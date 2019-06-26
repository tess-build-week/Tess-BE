const db = require('../dbConfig.js');
const model = require('./authModel');


describe('authModel', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    it('should set the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('addUser()', () => {
        it('should insert users', async () => {
            await model.addUser({ username: "Bob", password: "password" });
            await model.addUser({ username: "Tom", password: "password" });

            const users = await db('users');

            expect(users).toHaveLength(2);
        });
        it('should insert the provided user', async () => {
            let user = {
                username: 'Someone',
                password: 'password'
            }

            let inserted = await model.addUser(user);
            expect(inserted.username).toBe(user.name);
        })
    })
    describe('findBy()', () => {
        it('should find users by a filter', async () => {
            let output = await model.findBy
        })
    })
})