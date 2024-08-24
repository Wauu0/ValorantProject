// PHONE BLOCK 

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_span')

const regExp = /\+996 [2579]\d{2}-\d{2}-\d{2}-\d{2}/

phoneButton.onclick = () => {
    if (regExp) {
         
    }
}

// const tapContentBlocks = document.querySelector('.tab_content_block')

// const hidetTapContentBlocks = () => {
//     tapContentBlocks.forEach((item) => {
//         item.style.display = 'none'
//     })
// }
const tabContentItems = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabItemsParent = document.querySelector('.tab_content_items')
const hideTabContent = () => {
    tabContentItems.forEach((item) => {
        item.style.display = 'none'
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentItems[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}
const auto = (index = 0) => {
    setInterval(() => {
        index++
        if(index >= tabItems.length){
            index = 0
        }
        hideTabContent()
        showTabContent(index)
    }, 3000);
}
auto()
//converter


// somInput.addEventListener("input", () => {
//     const request = new XMLHttpRequest()
//     request.open("GET","../data/converter.json")
//     request.setRequestHeader("Content-type","application/json")
//     request.send()

//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         input.value = (somInput.value / data.usd).toFixed(2)
        
//     }
// })
//kiss - keep it simple, stupid - делай проще идиот

const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const euroInput = document.querySelector('#eur');

const converter = (element, targetElements) => {
    try{
        element.oninput = () => {
            const request = new XMLHttpRequest();
            request.open("GET", "../data/converter.json");
            request.setRequestHeader("Content-type", "application/json");
            request.send();
            request.onload = () => {
                const data = JSON.parse(request.response);
                if (element.id === 'som') {
                    targetElements.usd.value = (element.value / data.usd).toFixed(2);
                    targetElements.eur.value = (element.value / data.eur).toFixed(2);
                }
                if (element.id === 'usd') {
                    targetElements.som.value = (element.value * data.usd).toFixed(2);
                    targetElements.eur.value = (element.value * data.usd / data.eur).toFixed(2);
                }
                if (element.id === 'eur') {
                    targetElements.som.value = (element.value * data.eur).toFixed(2);
                    targetElements.usd.value = (element.value * data.eur / data.usd).toFixed(2);
                }
            };
        };
    }
    catch(error){
        console.log(error);
    }
};

converter(somInput, { usd: usdInput, eur: euroInput });
converter(usdInput, { som: somInput, eur: euroInput });
converter(euroInput, { som: somInput, usd: usdInput });

//CARDSWITCHER

const cardBlock = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
let cardId = 1

async function request (){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        const data = await response.json()
        const getData = await(() => {
            cardBlock.innerHTML = `
        <p>${data.title}</p>
        <p style>${data.completed}</p>
        <span>${data.id}</span>
        `
        })
        getData()
    }
    catch(error){
        console.log(error);  
    }
    }

request()
btnNext.onclick = () => {
    
    cardId++
    if(cardId >= 200){
        cardId = 1
    }
    request()
}
btnPrev.onclick = () => {
    cardId--
    if(cardId < 1){
        cardId = 200
    }
    request()
}

const getData= async () =>{
    try {
        const url="https://jsonplaceholder.typicode.com/posts"
        const response= await fetch(url)
        const data = await response.json()
        console.log(data)
    }catch(error) {
        console.log(error)
    }
}

// query params - параметры запроса

//weather

const cityInput = document.querySelector('.cityName')
const city= document.querySelector('.city')
const temp= document.querySelector('.temp')
const base_url="http://api.openweathermap.org"
const api_key='e417df62e04d3b1b111abeab19cea714'

// searchButton.onclick = () => {
//     fetch(`${API_URL}?q=${citySearchInput.value}&appid=${API_KEY}`)
//         .then(response => response.json())
//         .then(data => {
//             cityName.innerHTML = data.name ? data.name : "город не найден"
//             cityTemp.innerHTML = data.main?.temp ? Math.round(data.main.temp - 273) + "&deg;C" : ""
//         })
// }
const citySearch= () =>{
    try {
        cityInput.oninput = async (event) =>{
            const url=await `${base_url}/data/2.5/weather?q=${event.target.value}&appid=${api_key}`
            const response= await fetch(url)
            const data= await response.json()
            const getData =await (()=> {
                city.innerHTML=data.name || 'Город не найден...'
                temp.innerHTML=data.main?.temp ? Math.round(data.main?.temp - 273) + '&degC': '...'
            })
            getData()
        }
    }catch (error){
        console.log(error + 'что то пошло не так...')
    }
}
citySearch()

//optional chaining = опцианальная цепочка - ?
const adress = {
    id: 123,
    locCity:{
        street: "ibragimova",
        number: 34
    }
}
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let index = 0;

const hideSlide = () => {
  slides.forEach((slide) => {
    slide.style.opacity = 0;
    slide.classList.remove("active_slide");
  });
};
const showSlide = (i = 0) => {
  slides[i].style.opacity = 1;
  slides[i].classList.add("active_slide");
};

hideSlide();
showSlide(index);

const autoSlider = (i = 0) => {
  setInterval(() => {
    i++;
    if (i > slides.length - 1) {
      i = 0;
    }
    hideSlide();
    showSlide(i);
  }, 10000);
};

next.onclick = () => {
  index < slides.length - 1 ? index++ : (index = 0);
  hideSlide();
  showSlide(index);
};

prev.onclick = () => {
  index > 0 ? index-- : (index = slides.length - 1);
  hideSlide();
  showSlide(index);
};
