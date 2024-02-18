import speech_recognition as sr
from twilio.rest import Client


# First have to Make twilio account 
# Twilio credentials
# These credentials must have to take from your respective account

account_sid = '######################'
auth_token = '#######################'

# Create a Twilio client
client = Client(account_sid, auth_token)

# Function to recognize speech
def recognize_speech():
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("Speak something...")
        recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
        audio = recognizer.listen(source)

    try:
        print("Recognizing...")
        text = recognizer.recognize_google(audio)
        print("You said: ", text)
        return text
    except sr.UnknownValueError:
        print("Sorry, could not understand audio.")
        return None
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")
        return None

# Use voice recognition to get the message body
body_text = recognize_speech()

# sender and receiver is mentioned below with the message body
if body_text:
    # Send the message using Twilio
    message = client.messages.create(
        from_='whatsapp:+1***********',
        body=body_text,
        to='whatsapp:+91**********'
    )

    print(f"Message SID: {message.sid}")
else:
    print("No text detected from speech.")
