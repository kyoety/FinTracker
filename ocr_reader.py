from PIL import Image
import pytesseract
import re


def main()->None:
    print(pytesseract.__version__)

    # Keep in case we need image processing
    # image = Image.open('sample_receipt.png')
    # text = pytesseract.image_to_string(image)

    text = pytesseract.image_to_string('superstore-img-min.jpeg')

    cost_regex = re.search("[^b]total.{0,3}\$(\d{1,10}.\d{2})", text.lower())
    cost = cost_regex.group(1)
    print(cost)

if __name__ == "__main__":
    main()

