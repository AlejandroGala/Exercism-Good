//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
  var rnatrans = '';
  var g = 0;
  var letter = '';
  if (rna == ''){
    rnatrans = '';
  } 
  else{
    if (rna.length > 1){
      for (let i = 0; i < rna.length; i++){
        letter = rna.substr(i,1);



        if (letter == 'G'){
          letter = letter.replace('G','C');
        }
        else{
          letter = letter.replace('C','G');
          letter = letter.replace('A','U');
          letter = letter.replace('T','A');
        }




        
        rnatrans = rnatrans + letter;
      }
    }
    else{
      rnatrans = rna;
      if (rna == 'G'){
        rnatrans = rnatrans.replace('G','C');
      }
      else{
        rnatrans = rnatrans.replace('C','G');
        rnatrans = rnatrans.replace('A','U');
        rnatrans = rnatrans.replace('T','A');
      }
    }
  }
  return rnatrans;
};
