var sum_to_n_a = function (n) {
    var x = 0
    for (let i = 1; i <= n; i++) {
        x = x + i;
    }
    return x;
};

var sum_to_n_b = function (n) {
    if (n == 0) {
        return 0
    } else {
        return sum_to_n_b(n - 1) + n
    }
};

var sum_to_n_c = function (n) {
    return n * ((n + 1) / 2);
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(10));
console.log(sum_to_n_c(6));