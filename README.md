# FinTracker
I don't want to go broke

## Primary Features (not finalized)
1. OCR for scanning various receipts and cheques
2. Connect to bank account, I think banks have APIs we can use
3. Create financial plans, weekly and monthly costs, etc.
4. Track savings and set goals, budgets, different categories (visualize this information)
   *Add More*

## Models, frameworks, libraries, and APIs
Feature 1: OCR (could use kerasOCR, add more options)
Backend: Node.js
Frontend: React
*Add More I'm dumb and can't think of stuff rn*


## Regex explaination
```[^b]total.{0,3}\$(\d{1,10}.\d{2})```

```[^b]``` - Ensures that "b" is not found in the character before. This prevents searches for subtotal.

```total.{0,3}``` - Checks for string literal "total" with up to 3 other characters. This allows "total:" or "total  " to be found.

```\$``` - Checks for dollar sign.

```(\d{1,10}.\d{2})``` - Checks for up to 10 digits followed by a decimal and 2 digits. This allows "$0.00" or "$439.39" to be found. The parenthesis symbolizes grouping, which helps us access the value if it is found.

