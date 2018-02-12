var assert = require('assert');
var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
const app = require('../app');

describe('CLIENTS', function() {
  it('GET my orders ', function(done) {
    request(app)
      .get('/clients/?api_key=Pippo')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.be.a('array');
        done();
      });
  });

  it('POST a new order ', function(done) {
    request(app)
      .post('/clients?api_key=Caio')
      .set('Accept', 'application/json')
      .send({product: 'Coca-Cola'})
      .send({price: '3'})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('ADMIN', function() {
  it('GET all orders ', function(done) {
    request(app)
      .get('/admin/?api_key=admin')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.be.a('array');
        done();
      });
  });


  it('DELETE a order ', function(done) {
    request(app)
      .delete('/admin/1?api_key=admin')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('PUT status ', function(done) {
    request(app)
      .put('/admin/1?api_key=admin')
      .set('Accept', 'application/json')
      .send({'status': 'closed'})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });


  it('GET receipts ', function(done) {
    request(app)
      .get('/admin/receipts?api_key=admin')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.be.a('number');
        done();
      });
  });
});
