import {printToDom} from '../helpers/util.js';

const characters = [
    {
        id: 'character1',
        name: 'Oberyn',
        house: 'Martell',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Oberyn_Martell-Pedro_Pascal.jpg/220px-Oberyn_Martell-Pedro_Pascal.jpg'
    },
    {
        id: 'character2',
        name: 'Blackfish',
        house: 'Tully',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/9/93/Blackfish_6x07.png/revision/latest?cb=20160606190707'
    },
    {
        id: 'character3',
        name: 'Argus Filch',
        house: 'Frey',
        imageUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/c/c9/Filch-GOF.jpg/revision/latest?cb=20100418170019'
    },
    {
        id: 'character4',
        name: 'Bronn',
        house: 'cannot read house of null',
        imageUrl: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/a/ab/Bronn_of_the_Blackwater_S5.jpg/revision/latest?cb=20150422210515'
    }
];

const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find((x) => x.id === characterId);
    console.log('currentCharacter', currentCharacter);
};

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for(let i=0; i<characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
};

const charactersBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<div class="col-2 character character-card" id="${character.id}">`;
        domString +=    `<div class="card">`;
        domString +=        `<img class="card-img-top img" src="${character.imageUrl}" alt="${character.name}">`;
        domString +=        `<div class="card-body">`;
        domString +=            `<h5 class="card-title">${character.name}</h5>`;
        domString +=        `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
    })
    printToDom(domString)
    createEvents();
};

export {charactersBuilder}