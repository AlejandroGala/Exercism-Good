//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet,seconds) => {
  const orbPeriod = [
    ['mercury', 0.2408467],
    ['venus', 0.61519726],
    ['earth', 1],
    ['mars', 1.8808258],
    ['jupiter', 11.862615],
    ['saturn', 29.447498],
    ['uranus', 84.016846],
    ['neptune', 164.79132]
  ]
  var edad = 0;
  for (let i = 0; i < 8; i++){
    if (planet == orbPeriod[i][0]){
      edad = parseFloat((seconds / (31557600*orbPeriod[i][1])).toFixed(2));
    }
  }
  return edad;
};
