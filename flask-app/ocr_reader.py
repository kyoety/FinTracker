from PIL import Image
import pytesseract
import re

def analyze_receipt(image)->float:
    print(pytesseract.__version__)

    # Keep in case we need image processing
    # image = Image.open('sample_receipt.png')
    # text = pytesseract.image_to_string(image)

    # text = pytesseract.image_to_string('superstore-img-min.jpeg')
    text = pytesseract.image_to_string(image)

    # Extract the cost. [^b] prevents "subtotal" from being extracted
    cost_regex = re.search("[^b]total.{0,3}\$(\d{1,10}.\d{2})", text.lower())
    if cost_regex:
        cost = cost_regex.group(1)
    else:
        cost = "N/A"

    # Extract the tax
    tax_regex = re.search("tax.{0,6}\$(\d{1,10}.\d{2})", text.lower())
    # print(tax_regex)
    if tax_regex:
        tax = tax_regex.group(1)
    else:
        tax = "N/A"

    # print(text)
    # Define the regex pattern to extract items and prices
    # ([A-Za-z\s]+[A-Za-z\s\d]*?)\s+\$([\d,]+\.\d{2})
    pattern = r'([A-Za-z \t\r\f\v]+[A-Za-z \t\r\f\v\d]*?)[ \t\r\f\v]+\$([\d,]+\.\d{2})'

    # Find all matches in the receipt
    matches = re.findall(pattern, text)

    # Have a list of words or phrases not to include
    banned_items = ["tax", "total", "subtotal"]

    # Removes all matches that are in banned items and $0.00 items. This helps for filtering
    matches = [match for match in matches if (match[0].strip()).lower() not in banned_items
               and match[1] != "0.00"
               and match[1] != cost] # prevents mistaking the total cost

    # print(matches)
    # Print the extracted items and prices
    # for item, price in matches:
    #     if (item.strip()).lower() != "total" and (item.strip()).lower() != "subtotal":
    #         print(f'Item: {item.strip()}, Price: ${price}')

    # For now, just return the price
    print(cost)
    return cost

    # print("Tax: $" + str(tax))
    # print("Total cost: $" + str(cost))

if __name__ == "__main__":
    image = Image.open('superstore-img-min.jpeg')
    process_image(image)


