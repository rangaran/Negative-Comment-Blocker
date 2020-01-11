setTimeout(function() {

if (window.location.href.indexOf("watch") > -1) {
    var i = 0;

    while (document.querySelectorAll("yt-formatted-string#content-text")[i].textContent){
        let data = document.querySelectorAll("yt-formatted-string#content-text")[i].textContent;
        console.log(data);

        if (data) {
            document.querySelectorAll("yt-formatted-string#content-text")[i].style.color = "white";
        }
        i++;
    }
}

},5000);

