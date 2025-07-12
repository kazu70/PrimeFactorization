function primeFactorize(n) {// 素因数分解の関数
    if (n <= 1) {
        return []; // 1以下の数は素因数分解できない
    }
    const factors = []
    // 2で割り切れる間は2をリストに追加
    while (n % 2 === 0) {// 2は唯一の偶数素数
        factors.push(2);
        n = Math.floor(n / 2);
    }
    // 奇数で割り切れるか確認
    for (let i = 3; i <= Math.sqrt(n); i += 2) {  
        while (n % i === 0) {
            factors.push(i);
            n = Math.floor(n / i);
        }
    }
    // 残った数が素数の場合
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// 素因数分解
const number = 53; // 素因数分解する数値
const factors = primeFactorize(number);
console.log(`素因数分解の結果: ${factors}`);
