class Hobbit {
	constructor(name, disposition, age, adult, isShort, old) {
		this._name = name;
		this._disposition = 'homebody';
		this._age = 0;
        this._adult = false;
        this._isShort = true;
        this._old = false;
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
		return this._adult;
    }
   
	celebrateBirthday() {
		this._age = 3;
		if (this._age == 3) {
			return (this._age = 3);
		}
		// if (this._adult == false) {
		// 	return (this._age = 32);
		// }
    }
       
    get isShort(){
        return this._isShort
    }

    get old(){
        this._age > 100 ? this._old : this._old = true
    }



}
module.exports = Hobbit;
