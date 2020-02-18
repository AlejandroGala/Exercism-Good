//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (color) => {
  const COLORS = ['black','brown','red','orange','yellow','green',
  'blue','violet','grey','white'];
  for (var i = 0; i < 10; i++){
    if (COLORS[i] == color[0]){
      var decenas = i;
    }
  }
  for (var i = 0; i < 10; i++){
    if (COLORS[i] == color[1]){
      var unidades = i;
    }
  }
  var num = (decenas * 10) + unidades;
  return (num);
};