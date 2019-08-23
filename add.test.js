const add = require('./add');



test('add 2 and 3', () => {
        return add(2,3).then(data => {
          expect(data).toBe(5);
        });
});

test('test add 3 and 4 with await', async () => {
        const data = await add(3,4);
        expect(data).toBe(7);
      });
      
test('test add 3 and 4 with await and try catch', async () => {
        try {
                await add(3,4);
        } catch (e) {
          expect(e).toMatch('error');
        }
      });