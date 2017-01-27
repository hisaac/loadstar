//----------------------------------------------------------------------------//

function getProvider(pressedButton) {
  event.preventDefault();
  let searchProvider = pressedButton.id;
  constructQuery(searchProvider);
}

function constructQuery(providerString) {
  let userInput = document.getElementById('query').value;
  let urlEncodedQuery;

  switch (providerString) {
    case 'google':
      urlEncodedQuery = encodeURI(userInput).replace('+', '%2B').replace(/%20/g, '+');
      location.href = 'https://www.google.com/search?q=' + urlEncodedQuery;
      break;
    case 'wikipedia':
      urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
      location.href = 'https://en.wikipedia.org/wiki/Special:Search?search=' + urlEncodedQuery;
      break;
    case 'imdb':
      urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
      location.href = 'http://www.imdb.com/find?q=' + urlEncodedQuery;
      break;
    case 'letterboxd':
      urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
      location.href = 'http://letterboxd.com/search/' + urlEncodedQuery + '/';
      break;
    case 'twitter':
      urlEncodedQuery = encodeURI(userInput);
      location.href = 'https://twitter.com/search?q=' + urlEncodedQuery;
      break;
    case 'facebook':
      urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
      location.href = 'https://www.facebook.com/search/results.php?q=' + urlEncodedQuery;
      break;
    case 'linkedin':
      urlEncodedQuery = encodeURI(userInput);
      location.href = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + urlEncodedQuery;
      break;
    case 'rateyourmusic':
      urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
      location.href = 'https://rateyourmusic.com/search?searchtype=a&searchterm=' + urlEncodedQuery;
      break;
    case 'discogs':
      urlEncodedQuery = encodeURI(userInput).replace(/%20/g, '+');
      location.href = 'https://www.discogs.com/search/?type=all&q=' + urlEncodedQuery;
      break;
    default:
      console.log('error');
      break;
  }
}

//----------------------------------------------------------------------------//
