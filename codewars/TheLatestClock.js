function latestClock(a, b, c, d) {
    let A = [a, b, c, d]
     let maxTime = -1;
  
      for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
              if (j === i) continue;
              for (let k = 0; k < 4; k++) {
                  if (k === i || k === j) continue;
                  let l = 6 - i - j - k;
  
                  let hours = 10 * A[i] + A[j];
                  let minutes = 10 * A[k] + A[l];
  
                  if (hours < 24 && minutes < 60) {
                      let totalMinutes = hours * 60 + minutes;
                      if (totalMinutes > maxTime) {
                          maxTime = totalMinutes;
                      }
                  }
              }
          }
      }
  
      if (maxTime === -1) return "";
  
      let hours = Math.floor(maxTime / 60);
      let minutes = maxTime % 60;
      return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
  }