function pyramid(n) {
    if (n === 0) {
      return [];
    }
  
    const result = [];
    for (let i = 1; i <= n; i++) {
      const row = Array(i).fill(1); 
      result.push(row); 
    }
  
    return result;
  }