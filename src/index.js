module.exports = function solveEquation(equation) {
  
  const masRes = [];


  const a =  parseInt(equation.match(/\-?\+?\d+(?= \* x\^2)/)[0], 10);
  let b = equation.match(/\-?\+?\s\d+(?= \* x)/)[0];
  (b.indexOf('- ') === 0) ? b = parseInt(b.replace(' ', '')) : b = parseInt(b.replace('+ ', ''));
  let c = equation.match(/\-?\+?\s\d+(?!.)/)[0];
  (c.indexOf('- ') === 0) ? c = parseInt(c.replace(' ', '')) : c = parseInt(c.replace('+ ', ''));


  const D = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
  masRes.push(Math.round(((-b + D) / (2 * a))));
  masRes.push(Math.round(((-b - D) / (2 * a))));


  masRes.sort((a, b) => a - b);
  return masRes;
}
