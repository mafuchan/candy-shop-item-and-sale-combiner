// Your code goes here
const items = [{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29
},{
    id: 2,
    description: "Mint Wafers",
    price: 1.09
},{
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38
}];




function getItemById(items, id){
    return items.filter(item => item.id == id)[0];
}


module.exports = {
    // Uncomment these as you write them
    getItemById,
    // buildTransactions,
    // getTransactionsByItemDescription
}
