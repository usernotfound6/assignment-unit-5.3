console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
    const album = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
    };


  collection.push(album);

  return album;
}

console.log(addToCollection("What's Going On", "Marvin Gaye", 1971));
console.log(addToCollection("Love Trip", "Takako Mamiya", 1982));
console.log(addToCollection("Die Lit", "Playboi Carti", 2018));
console.log(addToCollection("Channel Orange", "Frank Ocean", 2012));
console.log(addToCollection("Anything in Return", "Toro y Moi", 2013));
console.log(addToCollection("Love Deluxe", "Sade", 1992));

console.log(collection);

function showCollection(albums) {
    console.log('Number of albums:', albums.length);
    for (const album of albums) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
  }

showCollection(collection);

function findByArtist(artist) {
    const results = [];
  
    for (const album of collection) {
      if (album.artist === artist) {
        results.push(album);
      }
    }
  
    return results;
  }
  
console.log(findByArtist("Frank Ocean"));
console.log(findByArtist("Sade"));
console.log(findByArtist("Kendrick Lamar"));