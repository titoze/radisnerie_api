const deleteUselessAttributes = (obj, array) => {
    for (const element of array) {
        delete obj[`${element}`]
    }
}

module.exports = { deleteUselessAttributes }
