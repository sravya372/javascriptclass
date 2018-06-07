class Food {
    constructor(name,protein){
        this._name = name;
        this._protein = protein;
        this._level = 30;
    }
    get name() {
        return this._name;
    }

    get protein() {
        return this._protein
    }
   

    incrementProtein() {
        this._protein++;
    }

    energy(value){
        this._level += value;
        console.log(`your energy increased after eating food ${this._level}`)
    }

}

var proteinfood = new Food("egg", 34);
console.log(proteinfood.name);
console.log(proteinfood.protein);
proteinfood.incrementProtein();
console.log(proteinfood.protein);
proteinfood.energy(20);
