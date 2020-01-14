const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Dachshund breed', () => {
    const expectedDesc = "The Dachshund is a small long dog with muscular short legs.  There are three varieties of Dachshunds including shorthaired, wirehaired and longhaired and each of these varieties do shed.  They have a long muzzle and almost shaped eyes that can either be dark red or black-brown.";
    
    const dachshund = breedDetails('Dachshund');
    assert.equal(expectedDesc, dachshund);
  });

  it('returns breed details for the Cocker Spaniel breed', () => {
    const expectedDesc = "The English Cocker Spaniel has a long, silky coat which is usually straight or slightly wavy, and its legs, chest and belly are covered in longer hair called “feathering”.";
    
    const cockerSpaniel = breedDetails('Cocker Spaniel');
    assert.equal(expectedDesc, cockerSpaniel);
  });
});
