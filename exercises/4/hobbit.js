class Hobbit {
	constructor(name, disposition, age, adult, isShort, hasRing, old) {
		this._name = name;
		this._disposition = 'homebody';
		this._age = 0;
        this._adult = false;
        this._isShort = true;
		this._old = false;
		this._hasRing = false;
	}

	get name() {
		return this._name;
	}

	get disposition() {
		return this._disposition;
	}

	get age() {
		return this._age;
	}

	get adult() { 
		return this._adult ;
	}
	
	get old() {
		return this._old ;
	}
   
	celebrateBirthday() {
        this._age++
        
        if(this._age >= 33) {
        	return this._adult = true
        }
        if (this._age > 100) {
            return this._old = true // revoir le code!
		} else {
			return this._old;
		}
    }
   
    get isShort(){
        return this._isShort
	}
	
	get hasRing(){
		if (this.name == 'Frodo') { // voir pourquoi les opérateurs ternaire ne fonctionnent pas!!
			return this._hasRing = true;
		} else {
			return this._hasRing;
		}

		// this._name == 'Frodo' ? this._hasRing = true : this._hasRing;
	}

}
module.exports = Hobbit;
