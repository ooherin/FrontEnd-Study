type HandlerFunction = (request: string) => string | null;

// const createHandler = (handlerFunction: HandlerFunction): HandlerFunction => {
//   return function (request: string): string | null {
//     return handlerFunction(request);
//   };
// };

const chainHandler = (...handlers: HandlerFunction[]): HandlerFunction => {
  return function (request: string): string | null {
    for (const handler of handlers) {
      const result = handler(request);
      if (result !== null) {
        return result;
      }
    }
    return null;
  };
};

const concreteHandler1: HandlerFunction = (request: string) => {
  if (request === "A") {
    return "Handled by ConcreteHandler1";
  }
  return null;
};

const concreteHandler2: HandlerFunction = (request: string) => {
  if (request === "B") {
    return "Handled by ConcreteHandler2";
  }
  return null;
};

const handlerChain = chainHandler(concreteHandler1, concreteHandler2);

console.log(handlerChain("A")); //Handled by ConcreteHandler1
console.log(handlerChain("B")); //Handled by ConcreteHandler2
console.log(handlerChain("C")); //null
