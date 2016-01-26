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
  
