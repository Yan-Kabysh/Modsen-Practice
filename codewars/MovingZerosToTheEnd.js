function moveZeros(arr) {
    let nulls = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        arr.splice(i, 1)
        i--
        nulls.push(0)
      }
    }
    return arr.concat(nulls)
  }