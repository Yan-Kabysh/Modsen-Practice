function scoreThrows(radii){
    if(radii.length === 0) 
      return 0
    let result = radii.reduce((accum, elem) => elem > 10 ? accum : (elem >= 5 ? accum + 5 : accum + 10), 0)
    return result / 10 === radii.length ? result + 100 : result
  }