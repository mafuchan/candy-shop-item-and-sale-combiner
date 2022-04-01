// Your code goes here
function getItemById(items, itemId) {
    return items.find(item => item.id === itemId)
}

function killId(object) {
    delete object.id
    return object
}
function buildTransactions(sales, items) {
    return sales.map(sale => {
        return {
            ...sale,
            ...killId(
                getItemById(items, sale.itemId)
            ),
        }
    })
}

function getTransactionsByItemDescription(transactions, itemDescription) {
    return transactions.filter(transaction => transaction.description === itemDescription)
}


module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription,
}
