let string = "KANaK";

let toggle = "";

for (let i = 0; i < string.length; i++) {
  if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
    toggle = toggle + string[i].toLowerCase();
  } else {
    toggle = toggle + string[i].toUpperCase();
  }
}

console.log(string)
console.log(toggle)
 