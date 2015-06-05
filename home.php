<div  class="jumbotron">
    <h1>Welcome to Wiess College</h1>
    <?php
        $files = scandir("../images");
        print_r($files)

    ?>
    <div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="..." alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            <div class="item">
                <img src="..." alt="...">
                <div class="carousel-caption">
                    ...
                </div>
            </div>
            ...
        </div>
        <a class="left carousel-control" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>