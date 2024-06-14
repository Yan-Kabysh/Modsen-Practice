function sortArray(array) {
    let arr = []
    array.filter(elem => elem % 2 !==0 && arr.push(elem))
    arr.sort((a, b) => a - b)
    for(let i = 0; i < array.length; i ++){
       if(array[i] % 2 !==0){
          array[i] = arr.shift()
        }
    }
    return array
  }