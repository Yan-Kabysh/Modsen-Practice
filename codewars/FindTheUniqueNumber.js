function findUniq(arr) {
    return arr[0] === arr[1] ? arr.find(elem => elem !== arr[0]) : (arr[1] === arr[2] ? arr[0] : arr[1])
  }