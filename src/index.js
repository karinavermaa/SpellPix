import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";
// import addOnUISdk from "/Users/karinaverma/hello-world/src/add-on-ui-sdk.d.ts";
//import "./computerVisionSpellCheck"
//import { processText } from "./computerVisionSpellCheck";

addOnUISdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");

    const clickMeButton = document.getElementById("clickMe");
    const imageInput = document.getElementById('imageInput');

    clickMeButton.addEventListener("click", () => {
        // Simulate a click on the file input when the button is clicked
        imageInput.click();
    });

    // Event listener for file input to handle the image after selection
    imageInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.createElement('img');
            img.src = URL.createObjectURL(this.files[0]);
            img.onload = function() {
                URL.revokeObjectURL(img.src);
            };

            // Append the image or handle it as needed
            document.querySelector('.container').appendChild(img);
        }
    });

    // Optionally, disable the button initially and enable it after specific conditions are met
    clickMeButton.disabled = false;

    // Function to convert array to sentence
    function arrayToSentence(arr) {
        return arr.reduce((sentence, word, index) => {
            if (word.match(/^[.,!?;]$/) && index !== 0) {
                return sentence.trim() + word + ' ';
            } else {
                return sentence + word + ' ';
            }
        }, '').trim();
    }

    // console.log(__dirname);
    // var k = processText();

    // Example usage
    const wordsArray1 = ['This', 'is', 'box1', '.'];
    const wordsArray2 = ['This', 'is', 'box2', ',', 'with', 'another', 'sentence', '.'];

    document.getElementById('box1').textContent = arrayToSentence(wordsArray1);
    document.getElementById('box2').textContent = arrayToSentence(wordsArray2);
    
});