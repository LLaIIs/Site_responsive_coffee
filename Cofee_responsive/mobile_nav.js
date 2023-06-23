const navLinks = document.querySelectorAll('.nav-bar ul li a');
const burger = document.querySelector('.burguer');
const navbar = document.querySelector('.nav-bar');
//cart variaveis
let cartIcon=document.querySelector('#cart-icon');
let cart=document.querySelector('.cart');
let closeCart=document.querySelector('#cart-close');




//abre o cart
cartIcon.onclick=()=>{
  cart.classList.add('active');

};
//fecha o cart
closeCart.onclick=()=>{
  cart.classList.remove('active');

};

if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready); 

}else{
  ready();
}

function ready(){
  //remover itens
  var removeCartBtn = document.getElementsByClassName('cart-remove');
  console.log(removeCartBtn);
  for(var i=0;i<removeCartBtn.length;i++){
    var button = removeCartBtn[i];
    button.addEventListener('click',removeCartIten);
  }
  var qtndInputs =document.getElementsByClassName('cart-qntd');
  for(var i=0;i<qtndInputs.length;i++){
    var  input =qtndInputs[i];
    input.addEventListener('change',qntdChanged);


  }
  //adicionar no cart
  var addCart =document.getElementsByClassName('add');
  for(var i=0;i<addCart.length;i++){
    var button = addCart[i];
    button.addEventListener('click',addCartClicked);
  }
  document.getElementsByClassName('btn-buy')[0].addEventListener('click',buyButtonClicked);


}

function buyButtonClicked(event){
  alert('Seu pedido foi feito');
  var cartContent =document.getElementsByClassName('cart-content')[0];
  while(cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  UpdateTotal();
}


function removeCartIten(event){
  var buttonClicked =event.target;
  buttonClicked.parentElement.remove();
  UpdateTotal();
}
function qntdChanged(event){
  var input =event.target;
  if(isNaN(input.value)||input.value <=0){
    input.value=1;
    return;
  }
  UpdateTotal();
}
//atualizar o total

//adiciona 

function addCartClicked(event){
  var button = event.target;
  var shopProducts =button.closest('.prod');
  var title =shopProducts.getElementsByClassName("prod-title")[0].innerText;
  var price =shopProducts.getElementsByClassName("price")[0].innerText;
  var prodImg =shopProducts.getElementsByClassName("prod-img")[0].src;
  addProductToCart(title,price,prodImg);
  UpdateTotal();
}

function addProductToCart(title,price,prodImg){
  var cartShopBox =document.createElement('div');
  cartShopBox.classList.add('cart-box');
  var cartItens = document.getElementsByClassName('cart-content')[0];
  var cartItensNames = cartItens.getElementsByClassName('prod-title');
  for(var i=0;i<cartItensNames.length;i++){
    if(cartItensNames[i].innerText ==title){
    alert('Você ja adicionou esse item ao carrinho');
    return;
    }
  }
 
  var cartBoxContent = `
   <img src="${prodImg}" alt="cart-img">
  <div class="descripition">
    <h4 class="prod-title">${title}</h4>
    <div class="cart-price"> 
        <span>${price}</span>
        <input type="number" value="1" class="cart-qntd">
    </div>
</div>
  <i class='bx bxs-trash-alt cart-remove' ></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItens.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartIten);
cartShopBox.getElementsByClassName('cart-qntd')[0].addEventListener('change',qntdChanged);

UpdateTotal();
}



function UpdateTotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;

  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var qntdElement = cartBox.getElementsByClassName('cart-qntd')[0];
    var price = parseFloat(priceElement.innerText.replace('R$', '').replace(',', '.').trim());
    var qntd = qntdElement.value;
    total += price * qntd;
  }

  total = total.toFixed(2);
  document.getElementsByClassName('total-price')[0].innerText = 'R$' + total.replace('.', ',');
}








//menu responsivo
burger.addEventListener('click', function () {
  navbar.classList.toggle('active');
});


//ajustes do header
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId === 'login/index (2).html') {
      // Redirecionar para o link de login
      
      return;
    }else if (targetId == '/Cofee_responsive/index.html'){
      return;
    }
    else if (targetId == '/Cofee_responsive/index.html#sobre'){
      return;
    }
    else if (targetId == '/Cofee_responsive/index.html#produtos'){
      return;
    }else if(targetId == '/Cofee_responsive/index.html#avaliacoes'){
      return;
    }

    event.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Ajuste de deslocamento vertical
        behavior: 'smooth' // Rolagem suave
      });
    }
  });
});

window.addEventListener('scroll', function() {
  const headerContainer = document.querySelector('.header-container');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    headerContainer.classList.add('scrolled');
  } else {
    headerContainer.classList.remove('scrolled');
  }
});

