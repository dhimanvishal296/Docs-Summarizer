from app.models.gpt2_model import GPT2Model

def summarize_document(file_path: str) -> str:
    # Load the document
    with open(file_path, "r", encoding="utf-8") as f:
        document = f.read()

    # Initialize the GPT-2 model
    gpt2 = GPT2Model()

    # Generate a summary
    summary = gpt2.summarize(document)

    return summary
