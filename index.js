/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};





const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

*/

const messages = [];

function writeCards(names, event) {
    for (let i=0; i < names.length; i++ ) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

   return messages;
};

//writeCards (["Charlie", "Samip", "Ali"],"birthday");

//console.log(messages);



/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};





const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }

    return gifts;
}

wrapGifts(gifts);
*/


function countDown (start) {
   while (start >= 0) {
    console.log (start);
    start--;
   } 
}