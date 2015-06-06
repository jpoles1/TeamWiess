/**
 * Created by jordan on 6/5/15.
 */
loadContent = function() {
    loc = window.location.hash;
    if(router[loc]!=undefined){
        $("#main").load(router[loc]);
    }
    else{
        $("#main").load("home.html", function(){
            var numpics =23;
            for (i = 0; i < numpics; i++) {
                if(i==0){
                    $("#photoindc").append("<li data-target='#carousel' data-slide-to='"+i+"' class='active'></li>")
                    $("#photos").append("<div class='item active'><img src='photos/"+i+".jpg' class='img-responsive'/></div>");
                }
                else{
                    $("#photoindc").append("<li data-target='#carousel' data-slide-to='"+i+"'></li>")
                    $("#photos").append("<div class='item'><img src='photos/"+i+".jpg' class='img-responsive'/></div>");
                }

            }
        });
    }
}
selectButton = function(){
    if(loc==""){
        $(".nav").children("li").children("a[href='#']").parent().addClass("active");
    }
    else{
        $(".nav").children("li").children("a[href*='"+loc+"']").parent().addClass("active");
    }
}
var loc = window.location.hash;
var router = {"#home": "home.html", "#about": "about.html", "#newstudents": "newstudents.html", "#cabinet": "cabinet.html", "#court": "court.html", "#reps": "reps.html", "#resources": "resources.html"};
window.onhashchange = loadContent;
$(function(){
    selectButton();
    loadContent();
    $(".nav").children().not(".dropdown").bind( "click", function(){
        $("body").scrollTop(0);
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
    });
    $(".navbar-brand").click(function(){
        $("body").scrollTop(0);
        $("#home").siblings("li").removeClass("active");
        $("#home").addClass("active");
    });
});