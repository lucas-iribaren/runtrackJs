$(document).ready(function() {
    $("#btn").click(function() {
        $("#message").show();
        $("#message").text("“Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, onles construit, ensuite, on prie.”");
    });
});

$(document).ready(function() {
    $("#btn-hide").click(function() {
        $("#message").hide();
    });
});