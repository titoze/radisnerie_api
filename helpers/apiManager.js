const deleteUselessAttributes = (obj) => {
    delete obj.createdAt
    delete obj.updatedAt
}

module.exports = { deleteUselessAttributes }
