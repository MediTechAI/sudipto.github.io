<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text to Speech</title>
</head>
<body>

    <textarea id="textToSpeak" rows="4" cols="50" placeholder="Enter text to convert to audio"></textarea>
    <button onclick="convertToAudio()">Convert to Audio</button>

    <script>
        function convertToAudio() {
            const textToSpeak = document.getElementById('textToSpeak').value;

            // Check if the Web Speech API is available
            if ('speechSynthesis' in window) {
                const synth = window.speechSynthesis;
                const utterance = new SpeechSynthesisUtterance(textToSpeak);

                // Optional: Set voice and other parameters
                // const voices = synth.getVoices();
                // utterance.voice = voices[0];
                // utterance.rate = 1;
                // utterance.pitch = 1;

                synth.speak(utterance);
            } else {
                alert('Web Speech API is not supported in this browser');
            }
        }
    </script>

</body>
</html>
