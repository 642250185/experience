const hash = require('object-hash');

let pid = [{a:1}, {b:2}, {c:3}];

console.info(hash(pid));