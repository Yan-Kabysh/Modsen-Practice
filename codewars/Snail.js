snail = function(array) {
    console.log(array)
    const result = []
    if(array.length === 1 ){
      return array[0]
    }
      
      while(array.length > 0){
          for(let i = 0; i < array.length; i++){
          if(i === 0){
                  for(let j = 0; j < array.length; j++){
                      result.push(array[i][j])
                  }
              }
              else{
                  result.push(array[i][array.length - 1])
              }
          }  
          if(array.length === 1){
              return result
          }
          for(let i = array.length - 1; i > 0 ; i--){
              if(i === array.length - 1){
                  for(let j = array.length - 2; j >= 0; j--){
                      result.push(array[i][j])
                  }
              }
              else{
                  result.push(array[i][0])
              }
              
          }
          array.splice(0, 1)
          array.splice(array.length - 1, 1)
          for(let i = 0; i < array.length; i++){
              array[i].shift()
              array[i].pop()
  
          }
      }
                return result
  
  }