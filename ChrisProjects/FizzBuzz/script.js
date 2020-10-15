const button = document.querySelectorAll("button");

const fizzbuzz = () => {
  let textnode;

  for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) {
      console.log("FizzBuzz");
      // textnode = document.createTextNode("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
      //   textnode = document.createTextNode("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
      //   textnode = document.createTextNode("Buzz");
    } else {
      console.log(i);
      // textnode = document.createTextNode(i);
    }
  }
};
