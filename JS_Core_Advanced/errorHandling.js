const arrayEmptyCheck = (array) => {
    if(array.length === 0){
        throw new Error('Array is empty')
    }
}

try {
    arrayEmptyCheck([])
} catch (error) {
    console.log(error.message)
}