const getSum = (numArray) => numArray.reduce((accum, elem) => (elem < 9 && elem > 0) ? accum + elem : accum, 0)


console.log(getSum([2, 2, 3, 11, 5, 8]))