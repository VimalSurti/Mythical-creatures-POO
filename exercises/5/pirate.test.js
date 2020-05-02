const assert = require('chai').assert;
const Pirate = require('./pirate');

describe('Pirate', function() {

  it('should instantiate our good friend, Pirate', function() {
    const pirate = new Pirate();
    assert.isObject(pirate);
  });

  it('should have a name', function() {
    const pirate = new Pirate('Blackbeard');
    assert.equal(pirate.name, 'Blackbeard');
  });

  it('should be a scallywag by default', function() {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.name, 'JeffBeard');
    assert.equal(pirate.job, 'Scallywag');
  });

  it('should be a cook if passed into argument', function() {
    const pirate = new Pirate('HoraceBeard', 'cook');
    assert.equal(pirate.job, 'cook');
  });

  it.skip('should not be cursed by default', function() {
    const pirate = new Pirate('SteveBeard', 'cook');
    assert.equal(pirate.cursed, false);
  });

  it.skip('should become cursed after 3 heinous acts', function() {
    const pirate = new Pirate('JoshBeard', 'cook');

    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);

    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, true);
  });

  it.skip('should be able to rob ships', function() {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.robShip(), 'YAARRR!');
  });

  it.skip('should start with a booty of 0', function() {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);
  });

  it.skip('should have a booty of 100 after robShip()', function() {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);

    pirate.robShip();
    assert.equal(pirate.booty, 100);
  });
});
