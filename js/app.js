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

var trinketOne = document.getElementById('item-trinket1'),
        trinketTwo = document.getElementById('item-trinket2'),
        helmet = document.getElementById('item-helmet'),
        shoulders = document.getElementById('item-shoulder'),
        chest = document.getElementById('item-chest'),
        back = document.getElementById('item-back'),
        gloves = document.getElementById('item-hands'),
        pants = document.getElementById('item-legs'),
        belt = document.getElementById('item-waist'),
        wrist = document.getElementById('item-wrist'),
        feet = document.getElementById('item-feet'),
        fingerOne = document.getElementById('item-finger1'),
        fingerTwo = document.getElementById('item-finger2'),
        neck = document.getElementById('item-neck'),
        mainHand = document.getElementById('item-main-hand'),
        offHand = document.getElementById('item-off-hand');

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

        trinketOne.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.trinket1.icon +'.jpg" alt="' + characterItems.trinket1.name + '" />' +  characterItems.trinket1.name + '(' + characterItems.trinket1.itemLevel + ')';
        trinketTwo.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.trinket2.icon +'.jpg" alt="' + characterItems.trinket2.name + '" />' + characterItems.trinket2.name + '(' + characterItems.trinket2.itemLevel + ')';
        helmet.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.head.icon +'.jpg" alt="' + characterItems.head.name + '" />' + characterItems.head.name + '(' + characterItems.head.itemLevel + ')';
        shoulders.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.shoulder.icon +'.jpg" alt="' + characterItems.shoulder.name + '" />' + characterItems.shoulder.name + '(' + characterItems.shoulder.itemLevel + ')';
        chest.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.chest.icon +'.jpg" alt="' + characterItems.chest.name + '" />' + characterItems.chest.name + '(' + characterItems.chest.itemLevel + ')';
        back.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.back.icon +'.jpg" alt="' + characterItems.back.name + '" />' + characterItems.back.name + '(' + characterItems.back.itemLevel + ')';
        gloves.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.hands.icon +'.jpg" alt="' + characterItems.hands.name + '" />' + characterItems.hands.name + '(' + characterItems.hands.itemLevel + ')';
        pants.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.legs.icon +'.jpg" alt="' + characterItems.legs.name + '" />' + characterItems.legs.name + '(' + characterItems.legs.itemLevel + ')';
        belt.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.waist.icon +'.jpg" alt="' + characterItems.waist.name + '" />' + characterItems.waist.name + '(' + characterItems.waist.itemLevel + ')';
        wrist.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.wrist.icon +'.jpg" alt="' + characterItems.wrist.name + '" />' + characterItems.wrist.name + '(' + characterItems.wrist.itemLevel + ')';
        feet.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.feet.icon +'.jpg" alt="' + characterItems.feet.name + '" />' + characterItems.feet.name + '(' + characterItems.feet.itemLevel + ')';
        fingerOne.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.finger1.icon +'.jpg" alt="' + characterItems.finger1.name + '" />' + characterItems.finger1.name + '(' + characterItems.finger1.itemLevel + ')';
        fingerTwo.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.finger2.icon +'.jpg" alt="' + characterItems.finger2.name + '" />' + characterItems.finger2.name + '(' + characterItems.finger2.itemLevel + ')';
        neck.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.neck.icon +'.jpg" alt="' + characterItems.neck.name + '" />' + characterItems.neck.name + '(' + characterItems.neck.itemLevel + ')';
        mainHand.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.mainHand.icon +'.jpg" alt="' + characterItems.mainHand.name + '" />' + characterItems.mainHand.name + '(' + characterItems.mainHand.itemLevel + ')';
        offHand.innerHTML = '<img src="http://media.blizzard.com/wow/icons/36/' + characterItems.offHand.icon +'.jpg" alt="' + characterItems.offHand.name + '" />' + characterItems.offHand.name + '(' + characterItems.offHand.itemLevel + ')';
    }

}

// Load Something
function loadCharacter(jsonObj) {
    characterItems = jsonObj['items'];
    characterStats = jsonObj['stats'];
    characterTalents = jsonObj['talents'];
}