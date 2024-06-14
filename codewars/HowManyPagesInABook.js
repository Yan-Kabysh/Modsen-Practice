function amountOfPages(summary){
    let result = 0
    let m = summary - 9
    m > 0 ? result += 9 : result += summary
    if(m < 0)
       return result
    m -= 180
    m > 0 ? result += 90 : result += (180+m) / 2
    if(m < 0)
       return result
    m -= 2700
    m > 0 ? result += 900 : result += (2700+m) / 3
    if(m < 0)
       return result
    m -= 36000
    m > 0 ? result += 9000 : result += (36000+m) / 4
    if(m < 0)
       return result
    m -= 450000
    m > 0 ? result += 90000 : result += (450000+m) / 5
    if(m < 0)
       return result
    m -= 5400000
    m > 0 ? result += 900000 : result += (5400000+m) / 6
    if(m < 0)
       return result
    return result
  }