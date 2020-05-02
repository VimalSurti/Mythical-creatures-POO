const assert = require('chai').assert;
const Wizard = require('./wizard');

describe('Wizard', function() {

  it.skip('should have a name', function() {
    const wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
  });

  it.skip('should have a beard by default', function() {
    const wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.bearded, true);
  });

  it.skip('should not always be bearded', function() {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.bearded, false)
  });

  it.skip('should have root powers', function() {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
  });

  it.skip('should has lots of root powers', function() {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it.skip('should start rested', function() {
    // create wizard
    // assert isRested returns true
  });

  it.skip('should be able to cast spells', function() {
    // create wizard
    // assert wizard.cast() returns 'MAGIC BULLET'
  });

  it.skip('should only be able to cast 3 spells', function() {
    // create wizard
    // assert isRested is true
    // cast()
    // assert isRested is true
    // cast()
    // assert isRested is true
    // cast()
    // assert isRested is false
    // assert cast() returns 'I SHALL NOT CAST!'
  });
});
