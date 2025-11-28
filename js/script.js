function domain(dom) {
  return function (urls) {
    return `https//:${urls}.${dom}`;
  };
}

const createDom = domain("com");

console.log(createDom("google"));
