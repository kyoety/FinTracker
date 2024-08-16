from flask import Flask, request, jsonify
from PIL import Image
import pytesseract
from ocr_reader import analyze_receipt

app = Flask(__name__)

@app.route('/process-image', methods=['POST'])
def process_image():
    print("hi")
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    file = request.files['image']
    img = Image.open(file.stream)

    # Perform OCR on the image
    # text = pytesseract.image_to_string(img)

    text = analyze_receipt(img)
    print(text)
    return jsonify({"text": text})

if __name__ == '__main__':
    app.run(debug=True)
