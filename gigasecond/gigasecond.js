//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (actual) => {
  var mili = Date.parse(actual);
  var milin = mili + 1000000000000;
  var time = new Date(milin)
  return time;
};
