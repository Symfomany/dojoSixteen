function arrayLeaders(tableau = []) {
  // you code here
  // copie du tableau initial
  let tabAccumul = tableau;
  // ANDO
  //   const tab = tableau.forEach((element, index) => {
  //     // supprime le premier élément du tableau
  //     tabAccumul = tabAccumul.shift();
  //     // reduce pour renvoyer la somme des éléments du tableau
  //     tabAccumul = tableau.reduce((accumulateur, valcourante, index, array) => {
  //       return accumulateur + valcourante;
  //     }, 0);
  //     console.log(tabAccumul);
  //   });
  //   return tab;
  let clone = [...tableau];
  let tabSommes = [];
  let test = tableau.map(elt => {
    clone.shift();
    tabSommes.push(clone.reduce((x, y) => x + y, 0));
  });
  const tabLeader = [];
  tabSommes.forEach((elt, index) => {
    if (elt < tableau[index]) {
      tabLeader.push(tableau[index]);
    }
  });
  return tabLeader;
}

console.log(arrayLeaders([20, 1, 2, 3, 4, 0]));
