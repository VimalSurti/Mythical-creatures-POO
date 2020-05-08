const Medusa = require('./medusa');
class Person extends Medusa{
    constructor(name, statues, stare){
        super(name, statues, stare);
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
module.exports = Person;