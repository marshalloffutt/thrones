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

const charactersBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<div class="col-2 character">`;
        domString +=    `<div class="card">`;
        domString +=        `<img class="card-img-top img" src="${character.imageUrl}" alt="${character.name}">`;
        domString +=        `<div class="card-body">`;
        domString +=            `<h5 class="card-title">${character.name}</h5>`;
        domString +=        `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
    })
    printToDom(domString)
};

export {charactersBuilder}