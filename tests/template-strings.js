var expect=require('chai').expect;

describe('template strings', function() {
  it('true should be a string', function() {
    var string = 'abc';
    expect(string).to.be.a('string');
  });
});