function binarySearch(array, x) {
    let left = 0
    let right = array.length - 1
    let mid
    while (right >= left) {
        mid = left + Math.floor((right - left) / 2);
        // mid = (left + right) / 2
        if (array[mid] == x) {
            return mid
        }
        if (array[mid] > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}
module.exports = binarySearch 