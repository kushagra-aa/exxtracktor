# Exxtracktor

Fullstack App: Text Extraction Application

Extract Text from the Images

Built with 🤍 For You!

## Features

- Img to Text Extraction
- Minimal UI.

> [Easy OCR](https://github.com/JaidedAI/EasyOCR)

## Technologies Used

- **Frontend:** ReactJS, TypeScript
- **Frontend:** Django, Python

## Screenshots

![image](https://github.com/kushagra-aa/exxtracktor/assets/68841296/13b14aeb-69bc-464b-a12c-ade1ee2ecc03)
![image](https://github.com/kushagra-aa/exxtracktor/assets/68841296/205d2f05-d564-4dea-928e-4313c6b21f2b)
![image](https://github.com/kushagra-aa/exxtracktor/assets/68841296/df851981-e7e0-4759-88ab-eea72f168e6b)
![image](https://github.com/kushagra-aa/exxtracktor/assets/68841296/c09dcb90-3b18-4798-aa96-fcbeae251f80)



## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/kushagra-aa/exxtracktor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd exxtracktor
   ```

3. Setup the Backend

   ```bash
   cd backend
   ```

    a. Setup Python Virtual Environment

    ```bash
    python -m venv venv
    ```

    b. Active the virtual environment

    ```bash
    venv\Scripts\activate
    ```

    c. Install Dependencies

    ```bash
    pip install -r requirements.txt
    ```

    d. Create SuperUser

    ```bash
    python manage.py createsuperuser
    ```

    e. Create SuperUser

    ```bash
    python manage.py makemigrations
    ```

    f. Create SuperUser

    ```bash
    python manage.py migrate
    ```

4. Setup the Frontend

   ```bash
   cd frontend
   ```

    1. Install dependencies

    ```bash
    yarn
    ```

5. Run Frontend

   ```bash
   cd frontend; yarn dev
   ```

6. Run Backend

   ```bash
   cd backend; python manage.py runserver
   ```
