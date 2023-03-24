const hello = () => {
  console.log("Hello!");
};

const say = (someFunction) => {
  someFunction();
};

const sayHello = () => {
  return () => {
    console.log("Hello!");
  };
};

hello();
say(hello);
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */
