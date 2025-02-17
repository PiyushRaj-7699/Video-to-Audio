const { exec } = require('child_process');
const path = require('path');

// Python script ka path
const pythonScript = path.join(__dirname, 'whisper_transcribe.py');

// Execute Python script
exec(`python ${pythonScript}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Python script: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Python script error: ${stderr}`);
    return;
  }
  // Python script ka output
  console.log(`Transcription: ${stdout}`);
});
