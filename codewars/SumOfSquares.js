function sumOfSquares(n) {
    if (n <= 3) return n;
    const isPerfectSquare = (x) => {
        const s = Math.floor(Math.sqrt(x));
        return s * s === x;
    };
    if (isPerfectSquare(n)) return 1;
    for (let i = 1; i * i <= n; i++) {
        if (isPerfectSquare(n - i * i)) return 2;
    }
    while (n % 4 === 0) {
        n /= 4;
    }
    if (n % 8 === 7) return 4;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
}
