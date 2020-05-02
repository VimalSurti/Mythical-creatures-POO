class Dragon {
	constructor(name, rider, color, hungry) {
		this._name = name;
		this._rider = rider;
		this._color = 'blue';
		this._hungry = true ;
		this._count = 0;
	}
	get name() {
		return this._name;
	}

	get rider() {
		return this._rider;
	}

	get color() {
		return this._color;
	}

	get hungry() {
		return this._hungry;
	}
	
	eat(){
		this._count ++
		if (this._count === 3){
			return this._hungry = false;
		} else {
			return this._hungry;
		}
	}
}


module.exports = Dragon;
