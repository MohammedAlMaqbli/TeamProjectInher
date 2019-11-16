// form.name.value,
//     form.eyes.value,
//     form.hair.value,
//     form.language.value,
//     form.health.value,
//     form.weapens.value,
//     form.speed.value,
//     form.maleCoth.value,
//     form.mustache.value,
//     form.mesales.value,
//     form.image.value
const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const btn = document.querySelector("a");
const form = document.querySelector("form");
let sub = true;
const patterns = {
  name: /^([a-zء-ي]){3,12}(\s[a-z]{3,12})?/i,
  eyes: /^([a-zء-ي]){3,12}(\s[a-z]{3,12})?/i,
  hair: /^([a-zء-ي]){3,12}(\s[a-z]{3,12})?/i,
  language: /^([a-zء-ي]){3,12}(\s[a-z]{3,12})?/i,
  health: /^[0-9]{1,3}$/,
  speed: /^[0-9]{1,5}$/,
  weapens: /^([a-zء-ي]){3,12}(\s[a-z]{3,12})?/i,
  Coth: /^([a-zء-ي]){3,12}(\s[a-z]{3,12})?/i,
  mustache: /^([a-zء-ي]){3,12}(\s[a-z]{3,12})?/i,
  mesales: /^[0-9]{1,5}$/,
  image: /^.{1,299}$/s
};
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";

    document.getElementById("send").style.display = "none";
  } else {
    field.className = "invalid";
    sub = false;
    document.getElementById("send").style.display = "none";
  }
}
inputs.forEach(input => {
  input.addEventListener("keyup", e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
form.addEventListener("submit", e => {
  e.preventDefault();
  inputs.forEach(input => {
    validate(input, patterns[input.name]);
  });

  let check = document.querySelectorAll(".invalid").length == 0;
  if (check) {
    addNewMale(form);
    document.getElementById("send").style.display = "inline";
    window.location.href = "./index.html";
    form.reset();
  } else {
    document.getElementById("send").style.display = "none";
  }
});
