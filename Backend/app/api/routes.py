from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from app.api.utils import summarize_document
import os
from uuid import uuid4

router = APIRouter()

# Temporary storage for uploaded files
UPLOAD_DIRECTORY = "./tmp/"

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_id = str(uuid4())
    file_path = os.path.join(UPLOAD_DIRECTORY, f"{file_id}_{file.filename}")

    with open(file_path, "wb") as f:
        f.write(await file.read())

    return {"file_id": file_id, "file_name": file.filename, "file_path": file_path}

@router.post("/summarize")
async def summarize(file_id: str):
    file_path = os.path.join(UPLOAD_DIRECTORY, file_id)
    
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")

    summary = summarize_document(file_path)
    return JSONResponse(content={"summary": summary})
