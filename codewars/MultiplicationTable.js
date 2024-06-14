multiplicationTable = function(size) {
    let array = []
     for(let i = 1; i <= size; i++){
       let row = []
       for(let j = 1; j <= size; j++){
         row.push(i*j)
       }
       array.push(row)
     }
    return array
  }