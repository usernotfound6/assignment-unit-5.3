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