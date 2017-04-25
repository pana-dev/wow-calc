// ROGUE CALCULATOR

// Blizzard API Variables
const BASE_URL = 'https://us.api.battle.net/wow/';
const API_KEY = '8k7kh3mvnanft46vcqv93ezgagcm2qsw';

var realm = document.querySelector('#realm');
var character = document.querySelector('#characterName');
var locale = 'en_US';

var characterData = {};

// Build Character

function buildCharacter(characterData) {

    console.log(characterData);

    const characterInfo = characterData;
    const characterItems = characterInfo.items;
    const characterStats = characterInfo.stats;
    const characterTalents = characterInfo.talents;

    var itemList = document.querySelector('#itemList');
    itemList.innerHTML = '';

    for (var item in characterItems) {

        let row = document.createElement('li');

        if (characterItems[item].icon) {
            row.innerHTML = '<div class="item-img"><img src="http://media.blizzard.com/wow/icons/36/' + characterItems[item].icon + '.jpg" alt="' + characterItems[item].name + '" /></div><div class="item-info"><span class="item-name">' + characterItems[item].name + '</span><span class="item-level">(' + characterItems[item].itemLevel + ')</span></div>';
            itemList.appendChild(row);
        }

    }

}

// Get Character Information

function getCharacter(fields) {

    const REQ_HEADERS = new Headers({
        "Content-Type": "application/json"
    });

    const REQ_OPTIONS = {
        method: 'GET',
        headers: REQ_HEADERS,
        mode: 'cors',
        cache: 'default'
    };

    var request_url = BASE_URL + 'character/' + realm.value + '/' + character.value +
        '?fields=' + fields +
        '&locale=' + locale +
        '&apikey=' + API_KEY;

    fetch(request_url, REQ_OPTIONS).then(function(response) {

        return response.json().then(function(json) {
            characterData = json;
        });

    });

}

// Submit Button
var submit = document.querySelector('#search');

submit.addEventListener('click', () => {

    const FIELDS = ['items+', 'professions+', 'stats+', 'talents'];

    getCharacter(FIELDS);

    buildCharacter(characterData);

});