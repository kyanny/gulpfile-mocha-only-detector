var assert = require("assert");
describe('foo', function() {
  describe('1', function() {
    assert.equal(1, 1);
  });
  it('2', function() {
    assert.equal(2, 2);
  });
});
describe('bar', function() {
  it('1', function() {
    assert.equal(1, 1);
  });
  it('2', function() {
    assert.equal(2, 2);
  });
});
