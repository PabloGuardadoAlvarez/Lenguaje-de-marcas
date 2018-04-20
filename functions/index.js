
const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from U-tad! lol");
});

exports.emojify = functions.database.ref("/messages/{pushID}/text").onCreate(myHandler => {
  console.log ("emojify...");
  var originaldata = myHandler.val();
  var emojifyData = emojifyText(originaldata);
  return myHandler.ref.set(emojifyData);
});

function emojifyText(text) {
    var emojifiedText = text;
    emojifiedText = emojifiedText.replace(/\blol\b/ig, "😂");
    emojifiedText = emojifiedText.replace(/\bcat\b/ig, "😸");
    emojifiedText = emojifiedText.replace(/\b644307988\b/ig, "HIDEN")
    return emojifiedText;
}




// exports.phoneIsForbidden = functions.database.ref("/messages/{pushId}/text").onCreate(myHandler =>{
//     console.log("blocking phone number...");
//     var originalData = myHandler.val();
//     var forbidden = phoneIsForbbiden(originalData);
//
//     return myHandler.ref.set(forbidden);
//
// });

 // function phoneIsForbbiden(text) {
 //
 //     var msg = text;
 //     var possiblePhonenumber = msg.substring(msg.indexOf("6"), msg.indexOf("6")+9);
 //     try {
 //         parseInt(possiblePhonenumber);
 //         var msgReplaced = msg.replace(possiblePhonenumber, "PHONE NUMBER IS FORBIDDEN");
 //         return msgReplaced;
 //     } catch (Exception) {
 //         return msg;
 //     }
 //
 // }

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
