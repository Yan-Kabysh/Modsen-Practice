function ranks(scores) {
    const sortedScores = [...scores].sort((a, b) => b - a);
    
    const ranks = [];
    let currentRank = 1;
    
    for (let i = 0; i < sortedScores.length; i++) {
        if (i > 0 && sortedScores[i] !== sortedScores[i - 1]) {
            currentRank = i + 1; 
        }
        ranks.push(currentRank);
    }
        const result = scores.map(score => {
        const index = sortedScores.indexOf(score);
        return ranks[index];
    });
    
    return result;
}