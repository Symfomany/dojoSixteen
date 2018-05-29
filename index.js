function arrayLeaders(tableau = []) {
  let gitClown = [],
    tabBis = [];
  tableau.map((elt, index, array) => {
    tabBis.push(array.slice(index + 1).reduce((a, b) => a + b, 0));
    tabBis[index] < tableau[index] ? gitClown.push(tableau[index]) : false;
  });
  return gitClown;
}

console.log(arrayLeaders([20, 1, 2, 3, 4, 0]));
