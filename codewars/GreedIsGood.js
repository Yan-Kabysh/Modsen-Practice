function score( dice ) {

    const counts = [0, 0, 0, 0, 0, 0];
        let score = 0;
    
        dice.forEach(die => {
            counts[die - 1]++;
        });
        for (let i = 0; i < 6; i++) {
            const count = counts[i];
            if (count >= 3) {
                if (i === 0) {
                    score += 1000; 
                } else {
                    score += (i + 1) * 100; 
                }
                counts[i] -= 3;
            }
            if (i === 0) {
                score += counts[i] * 100; 
            } else if (i === 4) {
                score += counts[i] * 50;
            }
        }
    
        return score;
    }