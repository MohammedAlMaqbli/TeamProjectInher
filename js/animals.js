class Animals {
  static arrOfAnimals = [];
  constructor(name, age, sound, skin, isWild, food, env, movement, img) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.skin = skin;
    this.isWild = isWild;
    this.food = food;
    this.env = env;
    this.movement = movement;
    this.img = img;
    Animals.arrOfAnimals.push(this);
  }
  getAge() {
    switch (true) {
      case this.age <= 0 && this.age >= 4:
        return `Baby ${this.name} is ${this.age} years old`;
        break;

      default:
        return `Adult ${this.name} is ${this.age} years old`;
    }
  }
  eat() {
    return ` ${this.name}   Eats  ${this.food}`;
  }
  drink() {
    console.log(`${this.name} Drinking Water`);
  }
  move() {
    return `${this.name} Can ${this.movement}`;
  }
  live() {
    return ` ${this.name}   Lives  in ${this.env}`;
  }
  createHtml() {
    let html = `
<div class="char">
      <h1>${this.name}</h1>
      <img src="${this.img}" alt="">  
      <h4>Age: ${this.getAge()}</h4>
      <h4>Sound: ${this.sound}</h4>
      <h4>Skin:${this.skin}</h4>
      <h4>${this.name} is a ${this.isWild ? "Wild " : "Pat "}animal</h4>
      <h4>${this.eat()}</h4>
      <h4>${this.live()}</h4>
      <h4>${this.move()}</h4>
</div>`;
    console.log(this.move());
    document.querySelector("#userInfo").innerHTML += html;
  }
}

let a1 = new Animals(
  "Sark",
  12,
  "No Sound",
  "Fash Skin",
  1,
  "Fash",
  "Water",
  "Swim",
  "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1004792742%2F960x0.jpg%3Ffit%3Dscale"
);

let a2 = new Animals(
  "Lion",
  20,
  "Roar",
  "lion's skin",
  1,
  "Meat",
  "Forst",
  "Walk ",
  "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
);

let a4 = new Animals(
  "Birds",
  2,
  "shriek",
  "Feathers",
  1,
  "Seeds",
  "Tress",
  "Fly ",
  "https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2121,x_0,y_142/f_auto,q_auto,w_1100/v1554733134/shape/mentalfloss/78996-istock-682216682.jpg"
);

Animals.arrOfAnimals.forEach(animal => animal.createHtml());
