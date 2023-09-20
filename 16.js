//16 **Chetor bishtarin meghdar ro moshakhas konim

const Shopps = [
    {name: "Ofogh", storeNumber: 231, sale: 300000,},
    {name: "Pinar", storeNumber: 567, sale: 650000,},
    {name: "Razi", storeNumber: 432, sale: 400000,},
    {name: "Iranian", storeNumber: 859, sale: 500000,}
]

let payment = 0;
let maxSale = -Infinity;

Shopps.map((store) =>{
    if(store.sale <= 500000){
        payment = .03 * store.sale;
        console.log(
            'Store number: ', store.storeNumber , '\n',
            'Store sales: ', store.sale , '\n',
            'Seller payment', payment, '\n'
        );
    }
    else if(500000 < store.sale < 700000){
        payment = .05 * store.sale;
        console.log(
            'Store number: ', store.storeNumber , '\n',
            'Store sales: ', store.sale , '\n',
            'Seller payment', payment, '\n'
        );
    }
    
    console.log(Math.max(store.sale));

    
})
