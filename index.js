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
    $(".bottom-box").prepend(`
    <li id=${object.id} class="card-container">
      <header class="idea-head">
        <h1 class="title-of-card"contenteditable>${object.title}</h1>
        <img src="images/delete.svg" alt="Delete" class="delete-button buttons">
      </header>
      <p class="body-of-card"contenteditable>${object.body}</p>
      <footer class="footer-of-card">
        <img src="images/upvote.svg" alt="Up Vote" class="upvote">
        <img src="images/downvote.svg" alt="Down Vote" class="downvote">
        <p class="quality"><span class="quality-title">quality: </span><span class="change-quality">${object.quality}</span></p>
      </footer>
    </li>
  `)
    clearInputFields();

};

function deleteCard(event) {
    $(this).parent().parent().remove();
    var id = $(this).closest('li').attr('id');
    var cardHTML = $(this).closest('.card-container').remove();
    localStorage.removeItem(cardHTML[0].id);
 }

function localStoredCard(card,id) {
  var cardToStore = card;
  var stringifiedCard = JSON.stringify(cardToStore);
  localStorage.setItem(id, stringifiedCard);
}

function updateStorage(id, object) {
    string = JSON.stringify(object);
    localStorage.setItem(id, string);

};

function pullLocalStoredCard(id) {
    var string = localStorage.getItem(id);
    var object = JSON.parse(string);
    return object;
  };
      
function clearInputFields() {
    $('#title-input').val('');
    $('#body-input').val('');
}









