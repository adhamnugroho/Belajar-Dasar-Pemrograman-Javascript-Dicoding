class Tiger {
  constructor() {
    this.eat="meat";
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    return "grrrrrrr";
  }
}

// TODO 1
module.exports = Tiger;