setTimeout(function() {

if (window.location.href.indexOf("watch") > -1) {
    //while (document.querySelectorAll("yt-formatted-string#content-text")[i].innerHTML
	for (let commentItem of document.querySelectorAll("yt-formatted-string#content-text")){
        console.log(commentItem);
		let data = commentItem.innerHTML;
        console.log(data);

       // let fetchData = {
        //    body: "docum
       //     headers: new Headers()
       // };

        const url = 'http://localhost:3000/api/add/comment';
 
		let comment = {
			john: data
		}
		// The parameters we are gonna pass to the fetch function
		let fetchData = { 
			method: 'POST', 
			body: JSON.stringify(comment),
			headers: {
				'Content-Type': 'application/json'
			}
		}

        fetch(url, fetchData) // Call the fetch function passing the url of the API as a parameter
        .then(function(res) {
			return res.json();
		}).then((myJson) => {
			console.log(data);
			console.log(myJson);
			console.log(myJson.message);
			 if (myJson.message == "bad") {
				commentItem.style.color = "white";
			}
        })
        .catch(function() {
            // This is where you run code if the server returns any errors
        });

        // if (data) {
            // commentItem.style.color = "white";
        // }
    }
}

},10000);

