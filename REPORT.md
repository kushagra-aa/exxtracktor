# Project Documentation

## Overview

This document details the steps taken, challenges faced, and technology stack used to complete the project.

## Technology Stack

- **Backend:** Python, Django, DRF
- **Frontend:** ReactJS, TypeScript
- **Styling:** CSS
- **Database:** SQLLite

> OCR Used [Easy OCR](https://github.com/JaidedAI/EasyOCR)

## Steps Taken

1. Gathering Resources:
    - Identified and collected relevant resources.
2. Project Initialization:
    - Established project directory structure using best practices (e.g., Django-DRF or ViteJS-ReactJS-Typescript).
    - Initialized Git version control and made an initial commit.
3. Research and Planning:
    - Researched OCR APIs for Text Extraction.
    - Determined data models based on project requirements.
4. OCR Integration:
    - Implemented Text Recognition.
    - Implemented Bold Detection.
5. Django Server Setup:
    - Defined app structure, router, views, serializers, and models.
    - Implemented appropriate HTTP routes for data access and management.
6. Serializers Logic:
    - Coded Serializers for upload, get and add.
7. Views Logic:
    - Coded Serializers for upload, get and add.
8. Writing and Styling the UI (TSX):
    - Structured content and layout using React components.
    - Applied CSS styles for visual appeal and clarity.
9. Form and API Handling:
    - Developed functionalities for adding, editing, retrieving, refreshing, and deleting data using respective API endpoints.
10. Created Loader :):
    - For no particular reason other than the looks.
11. README.md Creation:
    - Provided basic project information, setup instructions, and usage details.

## Challenges Faced

- OCR API Integration:
  - Google Vision API documentation was found to be inconsistent and challenging to navigate, leading to difficulties in understanding available functionality and implementing specific operations.
  - Finally Settled on EasyOCR.

- Design and User Interface:
  - The project lacked a specific design or style guide, necessitating the creation of a basic UI from scratch without clear direction.

## Conclusion

Despite encountering certain challenges, such as difficulties with OCR API integration and the absence of a defined design, this project was successfully completed, fulfilling the assigned requirements. The final product provides a functional and user-friendly interface for extracting data through EasyOCR and Python.
