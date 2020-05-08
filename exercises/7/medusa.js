const Person = require('./person');
class Medusa{
    constructor(name, statues, stare){
        this._name = name;
        this._statues = [];
        this._stare = stare;
    }
    get name(){
        return this._name;
    }
    get statues(){
        return this._statues;
    }
    get stare(){
        return this._statues.push(Person._name)
    }

}

module.exports = Medusa;
