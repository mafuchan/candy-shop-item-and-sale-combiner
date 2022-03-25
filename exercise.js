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

const sales = [{
    itemId: 1,
    quantity: 2
},{
    itemId: 2,
    quantity: 2
},{
    itemId: 1,
    quantity: 2
},{
    itemId: 3,
    quantity: 3
}];


function getItemById(items, id){
    return items.filter(item => item.id == id)[0];
}

function buildTransactions(sales, items){
    return sales.map(sale => {
        return Object.assign(sale, getItemById(items, sale.itemId));
})}



module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    // getTransactionsByItemDescription
}
