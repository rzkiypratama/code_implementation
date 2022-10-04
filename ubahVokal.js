function ubahVokal(str) {
  if (typeof str !== "string") return "input harus berupa string";

  let split = str.split("");
  let vokal = "a";
  let change = "o";
  let a = "";

  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < vokal.length; j++) {
      if (vokal[j] === split[i]) {
        a+=change;
      } else {
        a+=split[i];
      }
    }
  }
  return a;
}

console.log(ubahVokal("malam"));
