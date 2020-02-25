
module.exports = function towelSort(matrix) {

    if (!Array.isArray(matrix)) {
        return [];
    }

    for (i = 1; i < matrix.length; i = i + 2) {
        matrix[i].reverse();
    }

    let newArr = matrix.flat()
    return newArr;
}
