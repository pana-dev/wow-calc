// ROGUE CALCULATOR

// Blizzard API Variables
const BASE_URL = 'https://us.api.battle.net/wow/';
const API_KEY = '8k7kh3mvnanft46vcqv93ezgagcm2qsw';

var realm = document.getElementById('realm');
// var realm = 'Bleeding Hollow';
var character = document.getElementById('characterName');
// var character = 'Paná';
var locale = 'en_US';

// Character Information
var characterInfo;
var characterItems;
var characterStats;
var characterTalents;

// Request
const REQUEST = new XMLHttpRequest();

// Submit Button
var submit = document.getElementById('search');

submit.onclick = function() {

    REQUEST.open('GET', BASE_URL + 'character/' + realm.value + '/' + character.value +
        '?fields=items+professions+stats+talents' +
        '&locale=' + locale +
        '&apikey=' + API_KEY
    );

    REQUEST.responseType = 'json';
    REQUEST.send();

    REQUEST.onload = function() {

        characterInfo = REQUEST.response;
        loadCharacter(characterInfo);
        
        var itemList = document.getElementById('itemList');

        itemList.innerHTML = '';

        for ( var item in characterItems ) {
            
            let row = document.createElement('li');

            if ( characterItems[item].icon) {
                row.innerHTML = '<div class="item-img"><img src="http://media.blizzard.com/wow/icons/36/' + characterItems[item].icon + '.jpg" alt="' + characterItems[item].name + '" /></div><div class="item-info"><span class="item-name">' + characterItems[item].name + '</span><span class="item-level">(' + characterItems[item].itemLevel + ')</span></div>';
                itemList.appendChild(row);
            }
            
        }

    }

}

// Load Something
function loadCharacter(jsonObj) {
    characterItems = jsonObj['items'];
    characterStats = jsonObj['stats'];
    characterTalents = jsonObj['talents'];
}