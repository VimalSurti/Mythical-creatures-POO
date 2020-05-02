const assert = require('chai').assert;
const Unicorn = require('./unicorn');

describe('Unicorn', function() {

  it('should instantiate our good friend, Unicorn', function() {
    const unicorn = new Unicorn();
    assert.isObject(unicorn);
  });

  it('should have a name', function() {
    const unicorn = new Unicorn('Bree');
    assert.equal(unicorn.name, 'Bree');
  });

  it('should be able to have a different name', function() {
    const unicorn = new Unicorn('Pam');
    assert.equal(unicorn.name, 'Pam');
  });

  it('should have a color', function() {
    const unicorn = new Unicorn('TayTay', 'blue');
    assert.equal(unicorn.color, 'blue');
  });

  it('should be white as default', function() {
    const unicorn = new Unicorn('Louisa');
    assert.equal(unicorn.color, 'white');
  });

  it('should refute isWhite', function() {
    const unicorn = new Unicorn('Steve', 'red');
    assert.equal(unicorn.isWhite(), false);
  });

  it('should say sparklying stuff', function() {
    const unicorn = new Unicorn('Brenna');
    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
  });
});
