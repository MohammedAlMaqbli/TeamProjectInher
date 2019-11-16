class Human {
  static arrOfChar = [];
  constructor(name, eyes, hair, language, health, weapens, speed) {
    this.name = name;
    this.eyes = eyes;
    this.hair = hair;
    this.language = language;
    this.health = health;
    this.isAlive = 1;
    this.speed = speed;
    this.weapens = weapens;
    this.live();
    Human.arrOfChar.push(this);
  }
  die() {
    this.isAlive = 0;
    this.isAlive ? "" : console.log("GameOver");
  }
  live() {
    this.isAlive = 1;
    this.isAlive ? console.log("NewGame") : "";
  }
  heal() {
    this.health = 100;
  }
}
class Male extends Human {
  constructor(
    name,
    eyes,
    hair,
    language,
    health,
    weapens,
    speed,
    maleCoth,
    mustache
  ) {
    super(name, eyes, hair, language, health, weapens, speed);
    this.mustache = mustache;
    this.maleCoth = maleCoth;
    this.voice = "Male Voice ";
  }
  speak() {
    return this.voice, "Speaking";
  }
}
class Female extends Human {
  constructor(
    name,
    eyes,
    hair,
    language,
    health,
    weapens,
    speed,
    femaleCoth,
    accassories
  ) {
    super(name, eyes, hair, language, health, weapens, speed);
    this.accassories = accassories;
    this.femaleCoth = femaleCoth;
    this.voice = "Female Voice ";
  }
  speak() {
    console.log(this.voice, "Speaking");
  }
}

class SuperFemale extends Female {
  constructor(
    name,
    eyes,
    hair,
    language,
    health,
    weapens,
    speed,
    femaleCoth,
    accassories,
    magicailPower,
    img
  ) {
    super(
      name,
      eyes,
      hair,
      language,
      health,
      weapens,
      speed,
      accassories,
      femaleCoth
    );
    this.magicailPower = magicailPower;
    this.img = img;
  }
  fly() {
    console.log("Flying");
  }
  createHtml() {
    let html = `
<div class="char">
      <h1>${this.name}</h1>
      <img src="${this.img}" alt="">  
      <h4>Eye Color: ${this.eyes}</h4>
      <h4>Hair Color: ${this.hair}</h4>
      <h4>Language:${this.language}</h4>
      <h4>Health:${this.health}</h4>
      <h4>Speed:${this.speed}</h4>
      <h4>Cloth:${this.femaleCoth}</h4>
      <h4>accassories:${this.accassories}</h4>
      <h4>Magicail Power: ${this.magicailPower}</h4>
</div>`;
    document.querySelector("#userInfo").innerHTML += html;
  }
}
class SuperMale extends Male {
  constructor(
    name,
    eyes,
    hair,
    language,
    health,
    weapens,
    speed,
    maleCoth,
    mustache,
    mesales,
    img
  ) {
    super(
      name,
      eyes,
      hair,
      language,
      health,
      weapens,
      speed,
      maleCoth,
      mustache
    );
    this.mesales = mesales;
    this.img = img;
  }
  boom() {
    console.log("BOOOOOOOOOOOOM!");
  }
  createHtml() {
    let html = `
<div class="char">
      <h1>${this.name}</h1>
      <img src="${this.img}" alt="">  
      <h4>Eye Color: ${this.eyes}</h4>
      <h4>Hair Color: ${this.hair}</h4>
      <h4>Language:${this.language}</h4>
      <h4>Health:${this.health}</h4>
      <h4>Speed:${this.speed}</h4>
      <h4>Cloth:${this.maleCoth}</h4>
      <h4>mustache:${this.mesales ? "Yes" : "No"}</h4>
      <h4>Mesales level: ${this.mesales}</h4>
</div>`;
    document.querySelector("#userInfo").innerHTML += html;
  }
}
class CPUFemale extends Female {
  constructor(
    name,
    eyes,
    hair,
    language,
    health,
    weapens,
    speed,
    femaleCoth,
    accassories
  ) {
    super(
      name,
      eyes,
      hair,
      language,
      health,
      weapens,
      speed,
      accassories,
      femaleCoth
    );
  }
  fight() {
    console.log("Fight");
  }
}
class CPUMale extends Male {
  constructor(
    name,
    eyes,
    hair,
    language,
    health,
    weapens,
    speed,
    maleCoth,
    mustache
  ) {
    super(
      name,
      eyes,
      hair,
      language,
      health,
      weapens,
      speed,
      maleCoth,
      mustache
    );
  }
  fight() {
    console.log("Fight");
  }
}
let player1 = new SuperMale(
  "Player2",
  "Black",
  "Short",
  "En",
  100,
  "Guns",
  150,
  "Shorts",
  "true",
  "Max",
  "https://i0.wp.com/metro.co.uk/wp-content/uploads/2019/05/Screenshot_4-46c3.jpg?quality=90&strip=all&zoom=1&resize=644%2C330&ssl=1"
);
let player2 = new SuperFemale(
  "Player1",
  "Black",
  "Long",
  "En",
  100,
  "Guns",
  200,
  "Watch",
  "Dress",
  "Fly",
  "https://s3-us-west-1.amazonaws.com/githyp-wpuploads/wp-content/uploads/2017/09/16063737/PUBG-All-Time-Record-Peak-Players-hq.jpg"
);

const addNewMale = form => {
  const player = new SuperMale(
    form.name.value,
    form.eyes.value,
    form.hair.value,
    form.language.value,
    form.health.value,
    form.weapens.value,
    form.speed.value,
    form.Coth.value,
    form.mustache.value,
    form.mesales.value,
    form.image.value
  );

  sessionStorage.setItem("char", JSON.stringify(player));

  window.location.href = "./index.html";
};
const getAllChars = () => {
  if (sessionStorage.char) {
    let news = JSON.parse(sessionStorage.getItem("char"));
    const player = new SuperMale(
      news.name,
      news.eyes,
      news.hair,
      news.language,
      news.health,
      news.weapens,
      news.speed,
      news.Coth,
      news.mustache,
      news.mesales,
      news.img
    );
  }
  Human.arrOfChar.forEach(char => char.createHtml());
};
console.log(Human.arrOfChar);
