'use strict'
var expect = require('chai').expect;

describe('let', function() {
  it('can define a variable', function() {
    let x=11;
    expect(x).to.equal(11);
  });
  it('can be used in an equation', function() {
    let x=10, y=5, z=6;
    var sum=x+y+z;
    expect(sum).to.equal(21);
  });
});

describe('const', function() {
  it('creates immutable variables', function() {
    const x = 'one and only';
    expect(x).to.equal('one and only');
  });
});

describe('destructuring', function() {
  it('make an assignment to an object', function() {
    var x = {a: 1, b: 2};
    var {a, b} = x;
    expect({a, b}).to.equal({a: 1, b: 2});
  });
  it('can swap variables', function() {
    var a = 1;
    var b = 3;
    var [a, b] = [b, a];
  expect(b).to.equal(1);
  });
});
