new Promise((resolve, reject) => {
    resolve();
}).then(() => {
    let i = 0;
    const intervalId = setInterval(() => {
        console.log(++i);
        if (i >= 10) {
            clearInterval(intervalId);
        }
    }, 1000);
});
