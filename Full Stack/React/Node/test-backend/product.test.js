const request = require('supertest');
const app = require('./app');
const { describe } = require('node:test');

describe('Products API',()=>{
    it('GET /api/products-> shouold return products',async()=>{
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    })
})