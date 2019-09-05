var a = ['hello', 'world'];
var b = a;

b[0] = 'bye';


console.info(`a[0]: ${a[0]}`);
console.info(`b[0]: ${b[0]}`);

var c = new String('woot');
console.info('c: ', c);

var d = function(a,b,c){};
console.info('d: ', d.length);