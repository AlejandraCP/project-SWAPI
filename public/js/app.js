const $containerSwapi = $(".container-swapi");
const url = "https://swapi.co/api/people/";

$.ajax({
  url: url,
  contentType: "application/json",
  method: "GET",
  success: function(response) {
    getcharacters(response);
  }
});

const getcharacters = array => {
  let characters = array.results;
  let totalCharacters = array.count;
  for (let i = 0; i < totalCharacters; i++) {
    if (i === 16) continue;
    let template = `<div class="container-image col-sm-4 col-md-3 col-6">
        <img src="https://starwars-visualguide.com/assets/img/characters/${i +
          1}.jpg" data-order="${i +
      1}" class="img-fluid" data-toggle="modal" data-target="#modalStarwars"/>
         </div>`;
    $containerSwapi.find(".row").append(template);
  }
};

const getdata = value => {
  $.ajax({
    url: `https://swapi.co/api/people/${value}`,
    contentType: "application/json",
    method: "GET",
    success: function(response) {
      person(response, value);
    }
  });
};

$containerSwapi.on("click", ".img-fluid", function() {
  let value = $(this).data("order");
  getdata(value);
});

function person(data, value) {
  $(".modal-title-characters").text(`${data.name}`);
}
