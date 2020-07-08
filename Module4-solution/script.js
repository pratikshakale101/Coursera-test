(function (window) {


var names = ["Mark", "Jeevan", "jin", "Pratiksha", "Alexandra", "Jimin", "Michael", "Yoongi", "Diana", "jasmine"];


for (var i in names) {

  
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);