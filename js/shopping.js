let serial = 0;
let total = 0;
// Card 1;
document.getElementById('coffee-btn').addEventListener("click" , function(){
    serial += 1;
    const productName = document.getElementById('frist-product-name').innerText;
    const productPrice = document.getElementById('frist-product-price').innerText;
    const productQuantity = document.getElementById('frist-product-quantity').innerText;
    const productPriceTotal = parseInt(productPrice) + parseInt(productQuantity);
    
    setInnerText();

    // Show the data in the table:
    displayData(productName , productPrice , productQuantity , productPriceTotal); 
    disabledButton('coffee-btn');
})
// productPriceTotal + total
// Card 2;
document.getElementById('heart-btn').addEventListener("click" , function(e){
    serial += 1;
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const pTotal = parseInt(pPrice) * parseInt(pQuantity);
    setInnerText();
    // console.log(pQuantity);
    displayData(pName , pPrice , pQuantity , pTotal);
    disabledButton('heart-btn');
})

// Card 3;
document.getElementById('panda-btn').addEventListener("click" , function(){
    serial += 1;
    const productName = document.getElementById('third-product-name').innerText;
    const productPrice = document.getElementById('third-product-price').innerText;
    const productQuantity = document.getElementById('third-product-quantity').innerText;
    const productPriceTotal = parseInt(productPrice) - parseInt(productQuantity);
    setInnerText();

    // Show the data in the table:
    displayData(productName , productPrice , productQuantity , productPriceTotal);
    disabledButton('panda-btn'); 
})

// Card 4;
document.getElementById('umbrella-btn').addEventListener("click" , function(){
    serial += 1;
    const productName = document.getElementById('four-product-name').innerText;
    const productPrice = document.getElementById('four-product-price').innerText;
    const productQuantity = document.getElementById('four-product-quantity').innerText;
    const productPriceTotal = parseFloat(productPrice) / parseFloat(productQuantity);
    productPriceTotal.toFixed(2);
    setInnerText();

    // Show the data in the table:
    displayData(productName , productPrice , productQuantity , productPriceTotal); 
    disabledButton('umbrella-btn'); 
})

// Card 5;
document.getElementById('vue-btn').addEventListener("click" , function(){
    serial += 1;
    const productName = document.getElementById('five-product-name').innerText;
    const productPriceInput = document.getElementById('first-input').value;
    const productQuantityInput = document.getElementById('second-input').value;
    const productPriceTotal = parseInt(productPriceInput) + parseInt(productQuantityInput);
    setInnerText();

    // Show the data in the table:
    if(productPriceInput <= 0 || productQuantityInput <= 0 || productPriceInput === '' || productQuantityInput === '' || isNaN(productPriceInput) || isNaN(productQuantityInput)){
        return alert('please enter a valid number');
    }
    displayData(productName , productPriceInput , productQuantityInput , productPriceTotal); 
    disabledButton('vue-btn'); 
    
})

function setInnerText(){
    const productsTotal = document.getElementById('total-product');
    productsTotal.innerText = total += 1;
}

// common function:
function displayData(pName , pPrice , pQuantity , pTotal){
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${pName}</td>
    <td>${pPrice}</td>
    <td>${pQuantity}</td>
    <td>${pTotal}</td>
    `;
    tableContainer.appendChild(tr);
    tr.style.color = 'white';
}

function disabledButton(id){
    document.getElementById(id).setAttribute('disabled' , true);
}