function sortirDong(angka) {
  if (typeof angka !== "number") return "Invalid input! Harus berupa number";

  let result = "";
  let items = angka.toString().split("0"); // items = ["595656", "159466", "56"]
  items.forEach((item) => {
    result = result + item.split("").sort().join("");
  });
  console.log("Hasilnya: " + result);
}
sortirDong(5956560159466056);

/* forEach() item dalam item yang dibagi di setiap karakter item.split('').
 Contoh: "321" menjadi array ['3', '2', '1']. 
 Array ini kemudian di urutkan dengan methor Array.sort() 
 sehingga menjadi ['1', '4', '7'] terus kita gabungkan kembali menjadi string
 dengan method Array.join() */

