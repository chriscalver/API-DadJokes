fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
	"method": "GET",
	 
	"headers": {
		'X-RapidAPI-Key': '78f85b7b41msh23461f7d0f97e63p1b3ddajsna0629e398be9',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    //console.log(response.setup);
    
     document.getElementById('quote2').innerHTML = response.body[0].setup;
     document.getElementById('author2').innerHTML = '- ' + response.body[0].punchline + ' -';
})
.catch(err => {
	console.log(err);
});