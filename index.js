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

      
function clearInputFields() {
    $('#title-input').val('');
    $('#body-input').val('');
}









