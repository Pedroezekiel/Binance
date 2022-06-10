// const getPost = () => {
//  fetch('https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=5')
//  .then(res => res.json())
//  .then(post => console.log(posts))
// }
function order_buy_sell_api(input, input2){
fetch('https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=5')
.then(res => res.json())
.then(data => {
console.log(data);
const { bids, asks } = data;
let html
if (input == "bids"){
    console.log(bids)
    html = bids.map(user =>{
    return `
    <p>${user[0]}${user[1]}</p>`
})
.join('')
}
else{
    console.log(asks)
    html = asks.map(user =>{
    return `
    <p>${user[0]}${user[1]}</p>`
})
.join('')
}
console.log(html)
document.querySelector(input2).innerHTML = ""
document
.querySelector(input2) 
.insertAdjacentHTML('afterbegin',html); 
let childNode = html.removeChild(childNode); 
}) 
}

setInterval(() => order_buy_sell_api("bids","#app"), 3000)
setInterval(() => order_buy_sell_api("asks", "#zpy"),3000)