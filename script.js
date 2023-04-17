// function removeChar(str){
//     //You got this!
//     str2 = str.slice(1, -1);
//     console.log(str2);
// }
//    removeChar("Hello");
// =========================================

// function pangrams(s) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     const regex = /\s/g;
//     const lowercase = s.toLowerCase().replace(regex, "");
    
//      for(let i = 0; i < alphabet.length; i++){
//       if(lowercase.indexOf(alphabet[i]) === -1){
//         return  "not pangram";
//       }
//      }
//         return "pangram";
//    ;
//   }
//   pangrams("The quick brown fox jumps ov");
  