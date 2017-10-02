function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString(ingredient)
  })
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template();
  document.getElementsByTagName("main")[0].innerHTML += result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
