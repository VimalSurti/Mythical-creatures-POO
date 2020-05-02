const assert = require('chai').assert;
const Dragon = require('./dragon');

describe('Dragon', function() {

  it('should instantiate our good friend, Dragon', function() {
    const dragon = new Dragon();
    assert.isObject(dragon);
  });

  it('should have name', function() {
    const dragon1 = new Dragon('Jeff');
    assert.equal(dragon1.name, 'Jeff');
    const dragon2 = new Dragon('Louisa');
    assert.equal(dragon2.name, 'Louisa');
  });

  it('should have a rider', function() {
    const dragon = new Dragon('Saphira', 'Eragon');
    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
  });

  it('should have a color', function() {
    const dragon = new Dragon('Saphira', 'Eragon', 'blue');
    assert.equal(dragon.color, 'blue');
  });

  it('should start off being hungry', function() {
    const dragon = new Dragon('Josh');
    assert.equal(dragon.hungry, true);
  });

  it('should be full after eating 3 times', function() {
    const dragon = new Dragon('Lady Vox');

    assert.equal(dragon.hungry, true);
    dragon.eat();
    assert.equal(dragon.hungry, true);
    dragon.eat();
    assert.equal(dragon.hungry, true);

    dragon.eat();
    assert.equal(dragon.hungry, false);
  });
});
