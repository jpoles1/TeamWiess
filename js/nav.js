/**
 * Created by jordan on 6/5/15.
 */
var router = {"#!home": "home.html", "#!about": "about.html", "#!newstudents": "newstudents.html", "#!cabinet": "cabinet.html", "#!court": "court.html", "#!reps": "reps.html", "#!resources": "resources.html", "#!calendar": "calendar.html"};
urlParam = function(theParameter) {
    var params = window.location.search.substr(1).split('&');
    for (var i = 0; i < params.length; i++) {
        var p=params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
};
loadContent = function() {
    var crawlurl = urlParam("_escaped_fragment_");
    if (crawlurl == false) {
        loc = window.location.hash;
    }
    else {
        loc = "#!"+crawlurl;
    }
    selectButton();
    if (router[loc] != undefined) {
        $("#main").load(router[loc], function () {
            if (loc == "#!cabinet" || loc == "#!reps") {
                $('[data-toggle="tooltip"]').tooltip()
            }
        });
    }
    else {
        $("#home").siblings("li").removeClass("active");
        $("#home").addClass("active");
        $("#main").load("home.html", function () {
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