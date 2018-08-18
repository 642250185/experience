const morse = require('morse');

// const str = 'Don\'t know why I don\'t want to go home';
// const morseCode = morse.encode(str);
// const result = morse.decode(morseCode);
//
// console.info('result: %j , morseCode: %j ', result, morseCode);
//
// console.error(morse.decode('-.. --- -. .----. - ....... -.- -. --- .-- ....... .-- .... -.-- ....... .. ....... -.. --- -. .----. - ....... .-- .- -. - ....... - --- ....... --. --- ....... .... --- -- .'));

const date = new Date();
const _date = date.toLocaleDateString();
const _time = date.toLocaleTimeString();
console.info(_date, _time);



















