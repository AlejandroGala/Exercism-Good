//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var cont = 0;
  var pangram = false;
  for (let i = 0; i < abc.length; i++){
    for (let x = 0; x < input.length; x++){
      if (abc.substr(i,1) == input.substr(x,1)){
        cont = cont + 1;
        break;
      }
      else if (ABC.substr(i,1) == input.substr(x,1)){
        cont = cont + 1;
        break;
      }
    }
  }
  if (cont == 26){
    pangram = true;
  }
  return pangram;
};
