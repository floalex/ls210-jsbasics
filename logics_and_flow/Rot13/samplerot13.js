function rot13(text) {
  var transformed = '';

  for (var i = 0; i < text.length; i++) {
    transformed += rot13Character(text[i]);
  }

  return transformed;
}

function rot13Character(char) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = false;
  var initialIndex = alphabet.indexOf(char);
  var char, initialIndex, shiftedIndex, transformed;

  // no match might mean that we are dealing with an uppercase letter
  if (initialIndex === -1) {
    initialIndex = alphabet.indexOf(char.toLowerCase());
    upperCase = true;
  }

  // if there is still no match, it's not a character between a-z.
  if (initialIndex === -1) {
    return char;
  }

  shiftedIndex = (initialIndex + 13 ) % 26;
  transformed = alphabet[shiftedIndex];

  if (upperCase) {
    transformed = transformed.toUpperCase();
  }

  return transformed;
}