// data in memory
const dogBreeds = {
  'Cocker Spaniel': "The English Cocker Spaniel has a long, silky coat which is usually straight or slightly wavy, and its legs, chest and belly are covered in longer hair called “feathering”.",
  'Dachshund': "The Dachshund is a small long dog with muscular short legs.  There are three varieties of Dachshunds including shorthaired, wirehaired and longhaired and each of these varieties do shed.  They have a long muzzle and almost shaped eyes that can either be dark red or black-brown."
};

// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  // can simply return it (easy peezee, butter squeezy) ...
  return dogBreeds[breed];
};

// get the return value right away from the function
const dachshund = breedDetails('Dachshund');
// console.log(dachshund); //=> prints out the description for that breed

module.exports = breedDetails;
