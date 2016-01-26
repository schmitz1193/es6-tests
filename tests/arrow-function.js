var expect = require('chai').expect;

describe('arrow functions', function() {
  it('is shorter to write', function() {
    var fn=() => {
      return 'Hello World'
    };
    expect(fn()).to.equal('Hello World');
  });
  it('one parameter can be written with our parens', function() {
    var fn = name=> {
      return `Hello ${name}`;
    };
    expect(fn('Scott')).to.equal('Hello Scott');
   });
  it ('binds "this" to the function', function() {
    this.foo = 'bar';
    var fn =() => {
      return this.foo;
    };
    expect(fn()).to.equal('bar');
  });

});

