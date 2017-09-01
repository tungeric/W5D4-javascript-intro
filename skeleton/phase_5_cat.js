function Cat(name,owner) {
  this.name = name;
  this.owner = owner;
}


Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};


const garfield = new Cat("garfield","eric");
const fluff = new Cat("fluff","jesse");
const pencil= new Cat("pencil","dick");
const pen = new Cat("pen","island");

console.log(fluff.cuteStatement());

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}`;
};


console.log(pencil.cuteStatement());
console.log(pen.cuteStatement());


Cat.prototype.meow = function () {
  return `${this.name} is meowing too LOUDLY! `;
};

console.log(garfield.meow());

fluff.meow = function () {
  return `${this.name} is meowing too FUCKING LOUDLY! `;

};

console.log(fluff.meow());
