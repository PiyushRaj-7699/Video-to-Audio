// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient({
  keyFilename: 'path/to/your/service-account-file.json', // Replace this with the path to your downloaded JSON key file
});

// Path to the audio file to be transcribed
const filename = 'path/to/your/audio/file.wav';
const fs = require('fs');

// Reads a local audio file and converts it to base64 format
const file = fs.readFileSync(filename);
const audioBytes = file.toString('base64');

// The audio file's encoding, sample rate in hertz, and BCP-47 language code
const audio = {
  content: audioBytes,
};
const config = {
  encoding: 'LINEAR16',  // Or 'FLAC', 'MP3', etc.
  sampleRateHertz: 16000,
  languageCode: 'en-US',
};

const request = {
  audio: audio,
  config: config,
};

// Detects speech in the audio file
client
  .recognize(request)
  .then((data) => {
    const response = data[0];
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log(`Transcription: ${transcription}`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
