function nextCharacterCode(char) {
  if (char === '9') {
    return 'a'.charCodeAt(0);
  } else if (char === 'z') {
    return 'A'.charCodeAt(0);
  } else if (char === 'Z') {
    return '0'.charCodeAt(0);
  } else {
    return char.charCodeAt(0) + 1;
  }
}

function incrementLetter(id) {

  if (id.search(/[ \t\n]/g) !== -1) {
    throw new Error('Invalid characters detected.');
  }

  let carry = true;
  let nextId = id.split('').reverse().map(char => {

    const charCode = (carry) ?
      nextCharacterCode(char) : char.charCodeAt(0);

    carry = char === '9';

    return String.fromCharCode(charCode);
  }).reverse().join('');

  return carry ? `a${nextId}` : nextId;
}


exports.alphainc = incrementLetter;
