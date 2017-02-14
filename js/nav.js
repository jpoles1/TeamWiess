/**
 * Created by jordan on 6/5/15.
 */
String.prototype.hashCode = function(){
    if (Array.prototype.reduce){
        return this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    }
    var hash = 0;
    if (this.length === 0) return hash;
    for (var i = 0; i < this.length; i++) {
        var character  = this.charCodeAt(i);
        hash  = ((hash<<5)-hash)+character;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
var router = {"#!home": "home.html", "#!about": "about.html", "#!ateam": "ateam.html", "#!newstudents": "newstudents.html", "#!cabinet": "cabinet.html", "#!court": "court.html", "#!reps": "reps.html", "#!resources": "resources.html", "#!calendar": "calendar.html"};
var contdest = "#main";
var temeta = "Jordan Poles".hashCode();
var tefooter = "Created by Jordan Poles (Wiess '17) and Kunal Shah (Wiess '18)".hashCode();
var val = 1;
loadContent = function() {
    loc = window.location.hash;
    selectButton();
    if(val==0){$("#main").html("<h1>Give Credit Where Credit Is Due!!!</h1>")}
    if (router[loc] != undefined) {
        $(contdest).load(router[loc], function () {
            if (loc == "#!cabinet" || loc == "#!reps") {
                $('[data-toggle="tooltip"]').tooltip()
            }
        });
    }
    else {
        $("#home").siblings("li").removeClass("active");
        $("#home").addClass("active");
        $(contdest).load("home.html", function () {
            var numpics = 25;
            for (i = 0; i < numpics; i++) {
                if (i == 0) {
                    $("#photoindc").append("<li data-target='#carousel' data-slide-to='" + i + "' class='active'></li>")
                    $("#photos").append("<div class='item active'><img src='photos/" + i + ".jpg' class='img-responsive'/></div>");
                }
                else {
                    $("#photoindc").append("<li data-target='#carousel' data-slide-to='" + i + "'></li>")
                    $("#photos").append("<div class='item'><img src='photos/" + i + ".jpg' class='img-responsive'/></div>");
                }

            }
        });
    }
}
selectButton = function(){
    $(".nav").children("li").removeClass("active");
    if(loc==""){
        $(".nav").children("li").children("a[href='#']").parent().addClass("active").focus();
    }
    else{
        $(".nav").children("li").children("a[href*='"+loc+"']").parent().addClass("active").focus();
    }
}
var loc = window.location.hash;
window.onhashchange = loadContent;
$(function(){
    if($("meta[name='author']").attr("content").hashCode()!=temeta || $("#footer").text().hashCode()!=tefooter){
        contdest="#mein"
        val = 0
    }
    selectButton();
    loadContent();
    $(".nav").children().not(".dropdown").bind( "click", function(){
        $("body").scrollTop(0);
        //$(this).siblings("li").removeClass("active");
        //$(this).addClass("active");
    });
    $(".navbar-brand").click(function(){
        $("body").scrollTop(0);
        //$("#home").siblings("li").removeClass("active");
        //$("#home").addClass("active");
    });
});
