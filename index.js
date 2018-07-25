pageLoad();

$(".bottom-box").on('click', '.delete-button', deleteCard);
$(".save-btn").on('click', getCardInfo); 

function CardObject(object) {
  event.preventDefault();
  this.id = object.id;
  this.title = object.title;
  this.body = object.body;
  this.quality = object.quality || 'swill';
};
function getCardInfo(e) {
    e.preventDefault();
    if ($('#title-input').val() === '' || $('#body-input').val() === '') {
       return false;
    };  
    id = $.now();
    title = $('#title-input').val();
    body = $('#body-input').val();
    quality = 'swill';
    var card = new CardObject({id: id, title: title, body: body, quality: quality});
    makeCard(card);
    localStoredCard(card,id);
    clearInputFields();
};
function makeCard(object) {
$('.bottom-box').prepend(`<div class="card-container" data-id=${object.id}>
         <h2 class="title-of-card" contenteditable="true" onfocusout="getLocalCard(event)">${object.title}</h2>
         <button class="delete-button"></button>
       <p class="body-of-card" contenteditable="true" onfocusout="getLocalCard(event)">${object.body}</p>
         <button class="upvote"></button>
         <button class="downvote"></button>
         <p class="quality"> quality: <span class="qualityVariable">${object.quality}</span></p>
       <hr>
     </div>`);
    clearInputFields();
};
function deleteCard(event) {
   var id = $(this).closest('div').attr('id');
   var cardHTML = $(this).closest('.card-container').remove();
   localStorage.removeItem(object.id);
}
// function retrievInfo() {
//     for(var i = 0; i < localStorage.length; i++) {
//         var retrieveItem = (JSON.parse((localStorage.getItem(localStorage.key(i))));
//             console.log(retrieveItem)
// $('.bottom-box').prepend(`<div class="card-container" data-id=${object.id}>
//          <h2 class="title-of-card" contenteditable="true" onfocusout="getLocalCard(event)">${object.title}</h2>
//          <button class="delete-button"></button>
//        <p class="body-of-card" contenteditable="true" onfocusout="getLocalCard(event)">${object.body}</p>
//          <button class="upvote"></button>
//          <button class="downvote"></button>
//          <p class="quality"> quality: <span class="qualityVariable">${object.quality}</span></p>
//        <hr>
//      </div>`);
//     clearInputFields();
// };
// }
//
//need function tht's going to pull everythiung in local strage
//run thru it a foreach and generate a new card
//call it on page load pull it out of storage
//pull out the keys and iterate thru it 
//run thru it a foreach and generate a new card
//run it thru new card function
// the function will call makeCard in the for loop 
//it ill pul out item parse it run it rhu new card, run thru card and 
// function pullOut () {
// }
function pageLoad() {
  for (var i = 0; i < localStorage.length; i++) {
    string = localStorage.getItem(localStorage.key(i));
    object = JSON.parse(string);
    makeCard(object);
    };
  };

function localStoredCard(card,id) {
  var cardToStore = card;
  var stringifiedCard = JSON.stringify(cardToStore);
  localStorage.setItem(id, stringifiedCard);
}
function updateStorage(id, object) {
    string = JSON.stringify(object);
    localStorage.setItem(id, string);
};

$(document).ready(function(){
  $("#search-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".card-container").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
// function getLocalCard {

// }
      
function clearInputFields() {
    $('#title-input').val('');
    $('#body-input').val('');
}
// $(".bottom-box").on('click', function(event){
//     var currentQuality = $($(event.target).siblings('p.quality').children()[0]).text().trim();
//     var qualityVariable;
//     if (event.target.className === "upvote" || event.target.className === "downvote"){
//         if (event.target.className === "upvote" && currentQuality === "plausible"){
//             qualityVariable = "genius";
//             $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
               
//         } else if (event.target.className === "upvote" && currentQuality === "swill") {
//             qualityVariable = "plausible";
//             $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
               
//         } else if (event.target.className === "downvote" && currentQuality === "plausible") {
//             qualityVariable = "swill"
//             $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
//         } else if (event.target.className === "downvote" && currentQuality === "genius") {
//             qualityVariable = "plausible"
//             $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
//         } else if (event.target.className === "downvote" && currentQuality === "swill") {
//             qualityVariable = "swill";
        
//         } else if (event.target.className === "upvote" && currentQuality === "genius") {
//             qualityVariable = "genius";
//         }









