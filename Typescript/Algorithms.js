/**
 * function solve(n) {
  let k = 2,
    sum = 0;
  while (n > 1) {
    while (n % k == 0) {
      sum += k;
      n /= k;
    }
    k++;
  }
  return sum;
}

function factorSum(n) {
  while (n != solve(n)) n = solve(n);
  return n;
}

console.log(factorSum(35));
 */
//Cách kiểm tra một số nguyên dương n có phải một số nguyên tố hay không ?
//vd 24 35 156

//Một số nguyên tố là một số tự nhiên lớn hơn 1 và không thể tạo thành từ tích của hai số tự nhiên nhỏ hơn.
/**
 * function isPrime(n) {
    if (n < 2) return false
    for (i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) return false
    }
    return true
}
 */

//Cho một danh sách các phân số, hãy tìm chỉ số của phân số lớn nhất (đếm từ 0)
/**
 * function maxFraction(numerators, denominators) {
    var index = 0

    for (var i = 1; i < numerators.length; i++) {
        if (numerators[index] * denominators[i] < numerators[i] * denominators[index]) {
            index = i
        }
    }
    return index
}
 */

/**
 * [5, 2, 5]
   [6, 3, 4]
 */
