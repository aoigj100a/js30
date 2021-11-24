/*
  Object.assign({}, object)，但是assign是只有one Level，若是有多層object則要利用其他方式。
  obj3 = JSON.parse(JSON.stringify(obj));可以完整地複製物件。
  JSON.stringigy:物件轉String。
  JSON.parse:String轉物件。
*/

const obj1 = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};
obj2 = Object.assign({}, obj1, { age: 12 }); //one level copy
obj3 = JSON.parse(JSON.stringify(obj1)); //full copy