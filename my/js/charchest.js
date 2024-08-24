const person = document.querySelector(".card_person")
const request = async () => {
    try{
        const response = await fetch("../.vscode/person.json")
        const data = await response.json()
        data.characters.forEach(element => {
            const card = document.createElement("div")
            card.setAttribute("class", "card")
            card.innerHTML = `
            <div>
                <img src="${element.photo}" alt="${element.name}">
                <h4>${element.name}</h4>
                <p>${element.age}</p>
            </div>`
            person.append(card)
        });
    }
    catch (error){
        console.log(error);
    }
    
}
request()
