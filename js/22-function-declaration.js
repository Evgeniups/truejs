function getSumm() {
  console.log(3 * 7);
}
// getSumm();

/* ***************** */
/* Анонимная функция */
/* ***************** */
let w = function () {
  console.log(4 * 12);
}
w();
/* ***************** */


/* ******************* */
/* Именованная функция */
/* ******************* */
let z = function test() {
  console.log(5 * 7);
  // test();//вызов функции внутри функции. Бесконечность
}

z();