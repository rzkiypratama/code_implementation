function palindrome(str) {
  if (typeof str !== "string") return "Input harus berupa string";

  const kalimatTidakTerbalik = str.replace(/\W+|_|1|2|3/gi, "");
  const siPalindrome = kalimatTidakTerbalik.split("").reverse().join("");
  console.log(kalimatTidakTerbalik +" || " + siPalindrome);
  if (kalimatTidakTerbalik !== siPalindrome) return "bukan palindrome cuy";
  return "palindrome nih cuy";
}

const result = palindrome("oyo");
console.log(result);