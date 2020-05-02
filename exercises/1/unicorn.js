class Unicorn {
  constructor(name, color = 'white') {
    this._name = name;
    this._color = color;
  }
  // get = fonction qui donne accées avec un attribut.
  // set = va autoriser le changement!
  get name(){
    return this._name
  }

  get color(){
    return this._color
  }

  isWhite(){
    return this._color === 'white';
  }

  says(string){
    return `**;* ${string} *;**`
  }
}


module.exports = Unicorn;
