const request = require('supertest');
const app = require('../lib/app');

require('movie routes', () => {
  it('can create an item with POST', () => {
    return request(app)
      .post('/api/v1/movies')
      .send({ name: 'Groundhogs day', mainActor: 'Bill Murray', year: 1993, genre: 'comedy' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Groundhogs day', 
          mainActor: 'Bill Murray', 
          year: 1993, 
          genre: 'comedy'
        });
      });
  });
});
