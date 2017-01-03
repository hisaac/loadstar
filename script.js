//----------------------------------------------------------------------------//

function getProvider(pressedButton){
	event.preventDefault();
	var searchProvider = pressedButton.id;
	constructQuery(searchProvider);
};

function constructQuery(providerString){
	var userInput = document.getElementById('query').value;

	switch(providerString){
		case 'google':
			var urlEncodedQuery = encodeURI(userInput).replace('+', '%2B').replace(/%20/g, '+');
			location.href = 'https://www.google.com/search?q=' + urlEncodedQuery;
			break;
		case 'wikipedia':
			var urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
			location.href = 'https://en.wikipedia.org/wiki/Special:Search?search=' + urlEncodedQuery;
			break;
		case 'imdb':
			var urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
			location.href = 'http://www.imdb.com/find?q=' + urlEncodedQuery;
			break;
		case 'letterboxd':
			var urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
			location.href = 'http://letterboxd.com/search/' + urlEncodedQuery + '/';
			break;
		case 'twitter':
			var urlEncodedQuery = encodeURI(userInput);
			location.href = 'https://twitter.com/search?q=' + urlEncodedQuery;
			break;
		case 'facebook':
			var urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
			location.href = 'https://www.facebook.com/search/results.php?q=' + urlEncodedQuery;
			break;
		case 'linkedin':
			var urlEncodedQuery = encodeURI(userInput);
			location.href = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + urlEncodedQuery;
			break;
		case 'rateyourmusic':
			var urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
			location.href = 'https://rateyourmusic.com/search?searchtype=a&searchterm=' + urlEncodedQuery;
			break;
		case 'discogs':
			var urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
			location.href = 'https://www.discogs.com/search/?type=all&q=' + urlEncodedQuery;
			break;
		default:
			console.log('error');
			break;
	}
};

//----------------------------------------------------------------------------//