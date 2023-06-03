fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": '78f85b7b41msh23461f7d0f97e63p1b3ddajsna0629e398be9'
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    console.log(response.content);
    
     document.getElementById('quote').innerHTML = response.content;
     document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
})
.catch(err => {
	console.log(err);
});