# Document Summarization Web Application

## Overview
This project is a web application that allows users to upload documents (PDF, DOCX, TXT) and receive summarized versions using a locally deployed Language Model (LLM). The application is built with a Python backend (using FastAPI) and a React frontend. The backend processes and summarizes the uploaded documents using a pre-trained GPT-2 model.

## Features
- Upload documents in PDF, DOCX, or TXT format.
- View the content of the uploaded document.
- Receive a summarized version of the document.
- Validate file type before uploading.

## Setup and Installation

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/document-summarization-app.git
   cd document-summarization-app/backend
   
2. **Set up a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`

3. **Install dependencies:**
    ```bash
    pip install fastapi uvicorn transformers torch python-multipart
    
4. **Run the backend server:**
      ```bash
      uvicorn main:app --reload
   

    
     
