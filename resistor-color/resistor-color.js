//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (x) => {
  let y = 11;
  const COLORS = ['black','brown','red','orange','yellow','green',
  'blue','violet','grey','white'];
  for (var counter = 0; counter < 10; counter++){
    if (COLORS[counter] == x){
      y = counter;
    }
  }
  return (y);
};

export const COLORS = ['black','brown','red','orange','yellow',
'green','blue','violet','grey','white'];
