function findMiddleCharacter(str){
  const strLength = str.length;
  if(strLength === 1){
    return str;
  }

  let positionofMiddleCharacter = Math.floor(strLength/2);
  let lengthOfSubstring = 1;
  if(strLength%2 === 0){
    positionofMiddleCharacter = positionofMiddleCharacter - 1;
    lengthOfSubstring = 2;
  } 

  return str.substring(positionofMiddleCharacter,positionofMiddleCharacter+lengthOfSubstring);


}

findMiddleCharacter('ramahuja');
