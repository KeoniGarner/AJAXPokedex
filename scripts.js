$(document).ready(function(){
    for (var i = 1; i <= 151; i++){
        $("#pokemon-wrapper").append("<img id='" + i + "' src='http://pokeapi.co/media/img/"+ i +".png'>");
    }
    $('img').click(function(event){
        var htmlString = "";
        $.get("https://pokeapi.co/api/v2/pokemon/" + event.target.id, function(pokemon){
            htmlString += "<h1>"+pokemon.name.charAt(0).toUpperCase() + pokemon.name.substr(1)+"</h1><img src='https://pokeapi.co/media/img/"+ event.target.id +".png'><h4>Types</h4><ul>";
            for (var i = 0; i < pokemon.types.length; i++){
                htmlString += "<li>"+pokemon.types[i].type.name+"</li>";
            }
            htmlString += "</ul><h4>Height</h4><p>"+pokemon.height+"</p><h4>Weight</h4><p>"+pokemon.weight+"</p>";
            $("#pokedex").html(htmlString);
        }, "json");
    });
});