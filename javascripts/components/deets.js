import { printToDom } from "../helpers/util.js";
import {charactersBuilder, getCharacterz} from "./characters.js";

const closeButtonEvent = () => {
    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', () => {
        charactersBuilder(getCharacterz());
    });
};

const detailsBuilder = (character) => {
    let domString = '';
    domString += `<div class="col-6 offset-md-3">`;
    domString +=    `<div class="row">`;
    domString +=        `<button class="btn btn-danger" id="close">x</button>`;
    domString +=    `</div>`;
    domString +=    `<div class="row">`;
    domString +=        `<div class="col">`;
    domString +=            `<img src="${character.imageUrl}" alt="${character.name}"/>`;
    domString +=        `</div>`;
    domString +=        `<div class="col">`;
    domString +=            `<h1>${character.name}</h1>`;
    domString +=            `<h3>${character.house}</h3>`;
    domString +=        `</div>`;
    domString +=    `</div>`;
    domString += `</div>`;

    printToDom(domString);
    closeButtonEvent();
};

export {detailsBuilder}