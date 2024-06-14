'use strict'

const checkDuplicate = (numbers) => {
    const set = new Set(numbers)
    return set.size !== numbers.length
}