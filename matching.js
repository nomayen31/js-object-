const numbers =[45,65,23,98,19];

// for (let i = 0; i < numbers.length; i++) {
//    const number = numbers[i];
//    console.log(number);
// }

// for(const number of numbers){
//     console.log(number);

// }


const products = [
    {id:1, name:'walton phone', price:19000},
    {id:2, name:'xiami phone', price:15650},
    {id:3, name:'i-phone', price:54150},
    {id:4, name:'macbook laptop', price:119000},
    {id:5, name:'lenevo laptop', price:200000},
    {id:6, name:'oppo phone', price:23500},
    {id:7, name:'samsung', price:89520},
    {id:8, name:'sony', price:35000},
];

// for (const product of products) {
//     console.log(product);
// }

function matchProducts(products, search) {
    const match = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            match.push(product)
        }
    }   
    return match;
}
const result = matchProducts(products,'laptop');
console.log(result);