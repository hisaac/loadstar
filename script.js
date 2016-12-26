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
			location.href='https://www.google.com/search?q=' + urlEncodedQuery;
			break;
		case 'wikipedia':
			var urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
			location.href='https://en.wikipedia.org/wiki/Special:Search?search=' + urlEncodedQuery;
			break;
		case 'imdb':
			//
			break;
		case 'letterboxd':
			//
			break;
		case 'twitter':
			//
			break;
		case 'facebook':
			//
			break;
		case 'linkedin':
			//
			break;
		case 'rateyourmusic':
			//
			break;
		case 'discogs':
			//
			break;
		default:
			console.log('error');
			break;
	}
};

//----------------------------------------------------------------------------//