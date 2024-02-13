from easyocr import Reader


def extract_text(img_path):
    # Define the language (if needed)
    reader = Reader(['en'])  # Replace 'en' with your desired language code

    # Perform OCR
    text = reader.readtext(img_path)

    # Heuristic for bold text based on bounding box width and confidence (adjust as needed)
    def is_bold(box_info):
        box, text_value, confidence = box_info  # Unpack the tuple
        width, height = box[2][0] - box[0][0], box[3][1] - box[1][1]
        isBold = width / height > 5 and confidence > 0.3
        return isBold  # Adjust thresholds as needed

    # Pass the entire tuple to is_bold
    bold_text = [t[1] for t in text if is_bold(t)]

    return {"bold_text": bold_text, "text": [x[1] for x in text]}
