// business logic

//global variable...
var sentanceLower= [];

// Logic for WORDS begin with VOWEL...

var beginVowel= function(sentance){
if (sentanceLower[0]==='a' || sentanceLower[0]==='e' || sentanceLower[0]==='i' || sentanceLower[0]==='o' || sentanceLower[0]==='u')
{
  var result;
  result= sentance.concat('ay');
  return result;
}else if(sentanceLower[0]==="q" && sentanceLower[1]==="u") {
result=beginQU(sentance);
return result;
}else{
result=beginconsonant(sentance);
return result;
}
}


//Logic for words begin with consonants....

var beginconsonant= function(sentance){
  var result, firstHalf, i, secHalf, pointer;
  firstHalf= [];
  secHalf=[];
 for (i=0; i< sentance.length; i=i+1)
  {
    if (sentanceLower[i]!=='a' && sentanceLower[i]!=='e' && sentanceLower[i]!=='i' && sentanceLower[i]!=='o' && sentanceLower[i]!=='u'){
      pointer=i;
    }else{
          break;
        }
  }
pointer= pointer+1;
for (i = 0; i < pointer; i++) {
  firstHalf.push(sentance[i]);
}
for (i = pointer; i < sentance.length; i++) {
  secHalf.push(sentance[i]);
}
firstHalf=firstHalf.join("");
secHalf=secHalf.join("");
result=secHalf.concat(firstHalf + "ay");

return result;
}


//Logic for QU at the beginning of the words


var beginQU = function(sentance) {
    var firstQU, remainingQU, result;
    firstQU = [];
    remainingQU = [];
    firstQU.push(sentance[0]);
    firstQU.push(sentance[1]);
    firstQU=firstQU.join("");
  for (var i = 2; i < sentance.length; i++) {
    remainingQU.push(sentance[i]);
  }
  remainingQU=remainingQU.join("");
  result = remainingQU.concat(firstQU + "ay");
  return result;
}

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput, words;
    var sentance=[];
    var store=[];
    var userInput = ($("input#english").val());
    words= userInput.split(' ');
    // alert(words);
    // debugger;
    for (var i = 0; i < words.length; i++) {
      sentance= words[i];
      sentanceLower= sentance.toLowerCase();
      var result = beginVowel(sentance);
      store.push(result);
      // return result;
      // store= store.push(result);
    }
     store = store.join(" ")
    // var result = beginVowel(sentance);
    $(".english").text(userInput);
    $(".result").text(store);
    $("#output").show();
  });
});
