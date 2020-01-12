setTimeout(function() {

if (window.location.href.indexOf("watch") > -1) {
    var i = 0;

    while (document.querySelectorAll("yt-formatted-string#content-text")[i].textContent){
        let data = document.querySelectorAll("yt-formatted-string#content-text")[i].textContent;
        console.log(data);

        let fetchData = {
            method: 'POST',
            body: data,
            headers: new Headers()
        }

        const url = 'http://localhost:3000/api/add/comment';

        fetch(url, fetchData) // Call the fetch function passing the url of the API as a parameter
        .then(function() {
            // Your code for handling the data you get from the API
        })
        .catch(function() {
            // This is where you run code if the server returns any errors
        });

        if (data) {
            document.querySelectorAll("yt-formatted-string#content-text")[i].style.color = "white";
        }

        i++;
    }
}

},5000);

