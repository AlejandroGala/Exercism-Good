//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (x) => {
  let message = '';
  if (x != null){
    message = 'One for ' + x + ', one for me.';
  }
  else {
    
    message = 'One for you, one for me.';
  }
  return message;
};
