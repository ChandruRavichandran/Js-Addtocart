let btncart =document.querySelector(".carticon");
let cart=document.querySelector(".cart");
let btnclose=document.querySelector(".cartclose");


btncart.addEventListener('click',()=>{
    cart.classList.add('cartactive')
});

btnclose.addEventListener('click',()=>{
    cart.classList.remove('cartactive')
});

 document.addEventListener('DOMContentLoaded',loadfood);

 function loadfood() {
    loadcontent();
 }
 function loadcontent(){
    // remove food items in cart
    let btnremove =document.querySelectorAll('.cartremove');
      
    btnremove.forEach((btn)=>{
        btn.addEventListener('click',removeitem);
    });

    //product item change event
     
    let qtyelements=document.querySelectorAll('.cartquantity');

    qtyelements.forEach((input)=>{
        input.addEventListener('change',changeqty);
    });
    
   // productcart
   let cartbtns=document.querySelectorAll('.addcart');
   cartbtns.forEach((btn)=>{
    btn.addEventListener('click',addcart);
});

updatetotal();
}

 //remove item

 function removeitem(){
    if(confirm('Are You Sure to Remove')){
    let title=this.parentElement.querySelector('.cartfoodtitle').innerHTML;
    console.log(title);
    itemlist=itemlist.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadcontent();

 }
}

 //changequanity
 function changeqty(){
    if(isNaN(this.value) || this.value<1 ){
        this.value=1;
    }
    loadcontent();
 }

 let itemlist=[];

//addcart
function addcart(){
 let food=this.parentElement;
 let title=food.querySelector('.foodtitle').innerHTML;
 let price=food.querySelector('.foodprice').innerHTML;
 let imgsrc=food.querySelector('.foodimg').src;
 //console.log(title,price,imgsrc);
   
let newproduct={title,price,imgsrc}
//check product already exits in cart
if(itemlist.find((el)=>el.title==newproductelement.title))
{
    alert("Product Already added in cart");
    return;
}else{
    itemlist.push(newproduct);
}


 let newproductelement=createcartproduct(title,price,imgsrc);

 let element=document.createElement('div');
 element.innerHTML=newproductelement;
 let cartbasket=document.querySelector('.cartcontent');
cartbasket.append(element);
loadcontent();
}

function createcartproduct(title,price,imgsrc){
     return `
     <div class="cartbox">
                    <img src="${imgsrc}" class="cartimg">
                    <div class="detailbox">
                        <div class="cartfoodtitle">${title}</div>
                        <div class="pricebox">
                            <div class="cartprice">${price}</div>
                            <div class="cartamt">${price}</div>
                        </div>
                        <input type="number" value="1" class="cartquantity">
                    </div>
                    <ion-icon name="trash-outline" class="cartremove"></ion-icon>
                </div>
     `;
}

function updatetotal(){
 let cartitems=document.querySelectorAll('.cartbox');
 let totalvalue=document.querySelector('.totalprice');

 let total=0;
 cartitems.forEach(product=>{
    let priceElement=product.querySelector('.cartprice');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cartquantity').value;
    total+=(price*qty);
    product.querySelector('.cartamt').innerHTML="Rs."+price*qty;
 });
 totalvalue.innerHTML="Rs."+total;

 //add product count in cart icon
 let cartcount=document.querySelector('.cartcount');
 let count=itemlist.length;
 cartcount.innerHTML=count;

 if(count==0){
    cartcount.style.display='none';
  }else{
    cartcount.style.display='block';
  }

}
















