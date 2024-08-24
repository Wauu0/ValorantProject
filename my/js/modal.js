const modal = document.querySelector('.modal')
const modalTriggerButton = document .querySelector('#btn-get')
const modalCloseButton=document.querySelector('.modal_close')
const openModal =() =>{
    modal.style.display='block'
    document.body.style.overflow='hidden'
    removeEventListener("scroll", scrollEnd)
}
const closeModal = () =>{
    modal.style.display='none'
    document.body.style.overflow=''
}
modalTriggerButton.onclick = () => {
    openModal()
}
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if(event.target === modal){
        closeModal()
    }
}

const scrollEnd = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal();
    }
}
window.addEventListener("scroll", scrollEnd)

const autoModal = setInterval(() => {
    openModal()
}, 10000);
setTimeout(() => {
    clearInterval(autoModal)
}, 10001);