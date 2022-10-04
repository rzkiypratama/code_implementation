const FazzFood = (price, voucher, distance, tax) => {

  // validasi
  if (typeof price !== "number") return "Input harus berupa angka";
  if (typeof distance !== "number") return "Input harus berupa number";
  if (typeof tax !== "boolean") return "Input must be on Boolean";

  // proses perhitungan voucher discount
  // voucher discount convert to array
  const discountList = ["FAZZFOOD50", "DITRAKTIR60"];
  if (voucher) {
    if (voucher == discountList[0]) {
      if (price >= 50000) {
        discount = 0.5 * price;
        if (discount > 50000) {
          discount = 50000;
        }
        afterDisc = price - discount;
      } else {
        return "Minimal order 50000 untuk menggunakan voucher ini";
      }
    } else if (voucher == discountList[1]) {
      if (price >= 25000) {
        discount = 0.6 * price;
        if (discount > 30000) {
          discount = 30000;
        }
        afterDisc = price - discount;
      } else {
        return "Minimal order 25000 untuk menggunakan voucher ini";
      }
    }
  }

  // proses perhitungan shipping cost
  if (distance < 2) {
    shipCost = 5000;
  } else {
    shipCost = (distance - 2) * 3000 + 5000;
  }

  // proses perhitungan tax
  if (tax == true) {
    priceTax = (5 * price) / 100;
  } else {
    priceTax = 0;
  }

  // proses perhitungan total payment
  if (afterDisc == 0) {
    total = price + shipCost + priceTax;
    afterDisc = "";
  } else {
    total = afterDisc + shipCost + priceTax;
  }

  // Jumlah diskon
  if (discTotal = discount);

  return `
  Item price         : ${price}
  Disc%              : -${discTotal}
  Sub Total          : ${afterDisc}
  Shipping Cost      : ${shipCost}
  Tax (5%)           : ${priceTax}
  Payment total      : ${total}`;
};

console.log(FazzFood(650000, "FAZZFOOD50", 5, true));
