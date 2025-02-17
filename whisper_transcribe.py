import whisper

model = whisper.load_model("base")
result = model.transcribe("New recording 1.m4a")
print(result["text"])
