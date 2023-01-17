let total = 0;

function hotdog(n) {
    if (n < 5) {
        total += 100 * n
    } else if (n >= 5 && n < 10) {
        total += 95 * n
    } else if (n >= 10) {
        total += 90 * n
    }
    return total;
}