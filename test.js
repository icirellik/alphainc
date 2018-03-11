const assert = require('assert');
const alphainc = require('./index').alphainc;

describe('Increment Tests', () => {

  it('a inc b', () => {
    assert.equal('b', alphainc('a'));
  });

  it('z inc A', () => {
    assert.equal('A', alphainc('z'));
  });

  it('A inc B', () => {
    assert.equal('B', alphainc('A'));
  });

  it('Z inc 0', () => {
    assert.equal('0', alphainc('Z'));
  });

  it('9 inc aa', () => {
    assert.equal('aa', alphainc('9'));
  });

  it('a9 inc ba', () => {
    assert.equal('ba', alphainc('a9'));
  });

  it('a999 inc baaa', () => {
    assert.equal('baaa', alphainc('a999'));
  });

  it('9000 inc baaa', () => {
    assert.equal('9001', alphainc('9000'));
  });

});
