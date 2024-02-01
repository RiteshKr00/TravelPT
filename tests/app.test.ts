import app from '../src/index';
import supertest from 'supertest';

const request = supertest(app);

it('should return Hello World', async () => {
  const response = await request.get('/');
  expect(response.text).toBe('Hello World!');
});
