function solve() {

    class Melon {
        constructor(weight, melonSort) {
            // abstract class
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this._weight = weight;
            this._melonSort = melonSort;
        }

        get weight() {
            return this._weight;
        }

        get melonSort() {
            return this._melonSort;
        }

        elementIndex() {
            return this._weight * this._melonSort.length;
        }

        toString() {
            return `Element: \nSort: \nElement Index: ${this.elementIndex()}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            let tokens = super.toString().split('\n');
            tokens[0] += "Water";
            tokens[1] += this.melonSort;

            return tokens.join('\n');
        }
    }

    class Firemelon extends Melon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            let tokens = super.toString().split('\n');
            tokens[0] += "Fire";
            tokens[1] += this.melonSort;

            return tokens.join('\n');
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            let tokens = super.toString().split('\n');
            tokens[0] += "Earth";
            tokens[1] += this.melonSort;

            return tokens.join('\n');
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        toString() {
            let tokens = super.toString().split('\n');
            tokens[0] += "Air";
            tokens[1] += this.melonSort;

            return tokens.join('\n');
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        morph() {
            if(this.element === "Water"){
                this.element = "Fire";
            } else if (this.element === "Fire"){
                this.element = "Earth";
            } else if(this.element === "Earth"){
                this.element = "Air";
            } else {
                this.element = "Water";
            }
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}

//let test = new Melon(100, "Test");
//Throws error

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100

