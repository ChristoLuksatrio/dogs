// asyncBreedsTest.js
const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

it('provides, via callback, breed details for the Dachschund breed', (done) => {
  breedDetailsFromFile('Dachshund', (dachshund) => {
    const expectedDesc = "The Dachshund is a small long dog with muscular short legs.  There are three varieties of Dachshunds including shorthaired, wirehaired and longhaired and each of these varieties do shed.  They have a long muzzle and almost shaped eyes that can either be dark red or black-brown.";
    assert.equal(expectedDesc, dachshund);
    done(); 
  });      
});

it('provides, via callback, undefined for a breed that does not exist', (done) => {
  breedDetailsFromFile('Saphire', (desc) => {
    assert.equal(undefined, desc);
    done(); 
  });      
});