class UniqueArray extends Array {
  constructor(...args) {
    // make sure args is unique before passing it to super
    const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);

    super(...uniqueValue);
  }

  push(item) {
    // make sure only unique item is added
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}

const someArray = new UniqueArray("a", "b", "c", "a", "b", "c");
console.log(someArray); // ['a', 'b', 'c']
someArray.push("d");
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.push("a");
console.log(someArray); // ['a', 'b', 'c', 'd']
