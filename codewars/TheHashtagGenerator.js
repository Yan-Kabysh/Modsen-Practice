function generateHashtag(str) {
    console.log(str);
    if (!str.trim()) {
        return false;
    }
    const arr = str.trim().replace(/\s+/g, " ").split(' ');
    const upperLetter = arr.map(elem => {
        if (elem) {
            return elem[0].toUpperCase() + elem.slice(1);
        }
        return '';
    }).filter(elem => elem);
    console.log(upperLetter);
    const result = '#' + upperLetter.join('');
    return result.length > 140 ? false : result;
}