var title = $('#title-input').val();
var body = $('#body-input').val();
var numCards = 0;
var qualityVariable = "swill";

var newCard = function(id , title , body , quality) {
    return '<div id="' + id + '"class="card-container"><h2 class="title-of-card">'  
            + title +  '</h2>'
            + '<button class="delete-button"></button>'
            +'<p class="body-of-card">'
            + body + '</p>'
            + '<button class="upvote"></button>' 
            + '<button class="downvote"></button>' 
            + '<p class="quality">' + 'quality:' + '<span class="qualityVariable">' + quality + '</span>' + '</p>'
            + '<hr>' 
            + '</div>';
};

function cardObject() {
    return {
        title: $('#title-input').val(),
        body: $('#body-input').val(),
        quality: qualityVariable
    };
}

//PARSING u can't iterate through object so iuterate thru
//keys in object (pulls out all the keys and stores in array)
//

var storeObj = (Object.keys(localStorage))
// console.log(storeObj)
// var get = localStorage.getItem(storeObj[0]);
// console.log(get)
$.each(storeObj, function(index, key) {
   var gettingKey =  localStorage.getItem(key);
    var parsedKey = JSON.parse(gettingKey)
    console.log(parsedKey)
    numCards++;
    $( ".bottom-box" ).prepend(newCard(key, parsedKey.title, parsedKey.body, parsedKey

        .quality));
});

//STRINGIFYING

// localStorage.forEach(function(localStore) {
//     console.log(localStorage)

// });

var localStoreCard = function() {
    var cardString = JSON.stringify(title);
    localStorage.setItem('card' + numCards , cardString);
    console.log(cardString)
}

$('.save-btn').on('click', function(event) {
    event.preventDefault();
    if ($('#title-input').val() === "" || $('#body-input').val() === "") {
       return false;
    };  

    numCards++;
    $( ".bottom-box" ).prepend(newCard('card' + numCards, $('#title-input').val(), $('#body-input').val(), qualityVariable)); 
    localStoreCard();
    $('form')[0].reset();
});

$(".bottom-box").on('click', function(event){
    var currentQuality = $($(event.target).siblings('p.quality').children()[0]).text().trim();
    var qualityVariable;

    if (event.target.className === "upvote" || event.target.className === "downvote"){

        if (event.target.className === "upvote" && currentQuality === "plausible"){
            qualityVariable = "genius";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
               
        } else if (event.target.className === "upvote" && currentQuality === "swill") {
            qualityVariable = "plausible";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
               
        } else if (event.target.className === "downvote" && currentQuality === "plausible") {
            qualityVariable = "swill"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);

        } else if (event.target.className === "downvote" && currentQuality === "genius") {
            qualityVariable = "plausible"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);

        } else if (event.target.className === "downvote" && currentQuality === "swill") {
            qualityVariable = "swill";
        
        } else if (event.target.className === "upvote" && currentQuality === "genius") {
            qualityVariable = "genius";
        }

    var cardHTML = $(event.target).closest('.card-container');
    var cardHTMLId = cardHTML[0].id;
    var cardObjectInJSON = localStorage.getItem(cardHTMLId);
    var cardObjectInJS = JSON.parse(cardObjectInJSON);

    cardObjectInJS.quality = qualityVariable;

    var newCardJSON = JSON.stringify(cardObjectInJS);
    localStorage.setItem(cardHTMLId, newCardJSON);
    }
   
    else if (event.target.className === "delete-button") {
        var cardHTML = $(event.target).closest('.card-container').remove();
        var cardHTMLId = cardHTML[0].id;
        localStorage.removeItem(cardHTMLId);
    }
});
      










