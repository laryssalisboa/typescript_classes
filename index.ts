class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
greet () {
  return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('MyApp');


const appDiv = HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Classes</h1>
<h2>${greeter.greet()}!</h2>
`;
