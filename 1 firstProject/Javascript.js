window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav");
  const logo = document.querySelector(".log");
  const hidenHomeBTn = document.getElementById('hidenHomeBTn')

  if (window.scrollY > 50) {
    navbar.classList.add("newNav");
    logo.classList.add("col");
    hidenHomeBTn.className ='hidenHomeBTn'
  }
   else {
    navbar.classList.remove("newNav");
    logo.classList.remove("col");
    hidenHomeBTn.className = 'hidenHomeBTns'
  }
});

const counters = [
  {
    element: document.getElementById("counter-1"),
    section: document.getElementById("counter_seaction_1"),
    finalCount: 352,
  },
  {
    element: document.getElementById('counter-2'),
    section: document.getElementById('counter_seaction_2'),
    finalCount : 1490
  },
  {
    element: document.getElementById('counter-3'),
    section: document.getElementById('counter_seaction_3'),
    finalCount : 1452
  },
  {
    element: document.getElementById('counter-4') , 
    section : document.getElementById('counter_seaction_4'),
    finalCount: 30
  }
];

function updateCounter(){
    counters.forEach(counter =>{
        if(window.scrollY + window.innerHeight > counter.section.offsetTop){
            if(!counter.started){
                counter.started = true;
                let count = 0
                const interval = setInterval(()=>{
                    count +=1;
                    if(count >= counter.finalCount){
                        count = counter.finalCount;
                        clearInterval(interval)
                    }
                    counter.element.textContent = count
                } , 20)
            }
        }
    })
}
window.addEventListener('scroll' , updateCounter)

const protfolioProductes = [
  {
    img: 'assets/img/masonry-portfolio/masonry-portfolio-1.jpg',
    name:'App 1' , 
    dis: 'Necessitatibus eius consequatur ex aliquid '
  },
  {
    img: 'assets/img/masonry-portfolio/masonry-portfolio-2.jpg',
    name:'App 2' , 
    dis: 'Necessitatibus eius consequatur ex aliquid '
  },
  {
    img: 'assets/img/masonry-portfolio/masonry-portfolio-3.jpg',
    name:'App 3' , 
    dis: 'Necessitatibus eius consequatur ex aliquid '
  },
  {
    img: 'assets/img/masonry-portfolio/masonry-portfolio-4.jpg',
    name:'App 4' , 
    dis: 'Necessitatibus eius consequatur ex aliquid '
  },
  {
    img: 'assets/img/masonry-portfolio/masonry-portfolio-5.jpg',
    name:'App 5' , 
    dis: 'Necessitatibus eius consequatur ex aliquid '
  },
  {
    img: 'assets/img/masonry-portfolio/masonry-portfolio-6.jpg',
    name:'App 6' , 
    dis: 'Necessitatibus eius consequatur ex aliquid '
  },
  {
    img: 'assets/img/masonry-portfolio/masonry-portfolio-7.jpg',
    name:'App 7' , 
    dis: 'Necessitatibus eius consequatur ex aliquid '
  },
  {
    img: 'assets/img/masonry-portfolio/masonry-portfolio-8.jpg',
    name:'App 8' , 
    dis: 'Necessitatibus eius consequatur ex aliquid '
  },
  {
    img: 'assets/img/masonry-portfolio/masonry-portfolio-9.jpg',
    name:'App 9' , 
    dis: 'Necessitatibus eius consequatur ex aliquid '
  },
]
const products = document.getElementById('protfolioProducts')
const productDetail = document.getElementById('productDetail');

function showProductDetails(product) {
  productDetail.innerHTML = `
    <div class="detailContainer">
    <div className="closeBtn">
     <button id="close"><i class="fas fa-times-circle"></i></button>
    </div>
    <div className="detailFlex">
      <div className="detailImg">
        <img src="${product.img}" alt="loading">
      </div>
      <div class="ditailContent">
        <h2 class="name">${product.name}</h2>
        <p class="dis">${product.dis}</p>
      </div>
    </div>
    </div>
    
  `;
  productDetail.classList.remove('none');
  
  const closeBtn = document.getElementById('close');
  closeBtn.addEventListener('click', () => {
    productDetail.classList.add('none'); // Hide the details on close
  });
  
}

protfolioProductes.forEach(product => {
  const productHTML = document.createElement('div');
  productHTML.classList.add('productContainer');
  productHTML.innerHTML = `
    <img class="left" src="${product.img}" alt="loading">
    <div class="productContant">
      <h2 class="name left">${product.name}</h2>
      <p class="dis right">${product.dis}</p>
    </div>
  `;
  productHTML.addEventListener('click', () => showProductDetails(product));
  products.appendChild(productHTML);
});

document.querySelectorAll('.questionBox').forEach(box => {
  box.addEventListener('click', (e) => {
    e.preventDefault()
    const answer = box.querySelector('.ans');
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});

const data = document.getElementById('formSubmit');
data.addEventListener('click' , (e)=>{
  e.preventDefault()
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const subject = document.getElementById('subject')
  const textarea = document.getElementById('textarea')

  if(name.value == "" || email.value == "" || subject.value =="" || textarea.value == "" ){
    name.style.border = '1px solid red'
    email.style.border = '1px solid red'
    subject.style.border = '1px solid red'
    textarea.style.border = '1px solid red'
    return false
  }
  else{
    alert('Your form is submited')
    name.value = ""
    email.value = ""
    subject.value = ""
    textarea.value=""

    name.style.border = '1px solid gray'
    email.style.border = '1px solid gray'
    subject.style.border = '1px solid gray'
    textarea.style.border = '1px solid gray'
    return true
  }
})
const menu = document.getElementById('menu')

const navList = document.querySelector('header nav ul')
const navListA = document.querySelectorAll('#linked')
const mainMenu = document.getElementById('mainMenu')
    
menu.addEventListener('click' , ()=>{
  mainMenu.classList.toggle('fa-times')
  menu.classList.toggle('menu')
  navList.classList.toggle('menuu')
    })
navListA.forEach((item)=>{
  item.addEventListener('click' , ()=>{
    mainMenu.classList.toggle('fa-times')
    navList.classList.toggle('menuu')
  })
})
ScrollReveal({
  reset: true,
  distance: "50px",
  duraction: 2000,
  delay: 1000,
});
ScrollReveal().reveal(".top", { origin: "top" });
ScrollReveal().reveal(".left", { origin: "left" });
ScrollReveal().reveal(".right", { origin: "right" });
ScrollReveal().reveal(".bottom", { origin: "bottom" });