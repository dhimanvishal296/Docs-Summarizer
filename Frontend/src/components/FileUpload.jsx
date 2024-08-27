import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [docs, setDocs] = useState([]);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (
        file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.type === "text/plain"
      ) {
        setFileName(file.name);
        setError("");
  
        // Set the selected file to display using react-doc-viewer or DocxViewer
        const docObj = {
          uri: URL.createObjectURL(file),
          fileType: file.type,
          file: file // Store the actual file for DocxViewer
        };
        setDocs([docObj]);
      } else {
        setError(
          "Unsupported file type. Please upload PDF, DOCX, or TXT files."
        );
        setFileName("");
      }
    } else {
      setFileName("");
      setError("");
    }
  };
  

  const handleSummarize = () => {
    if (fileName) {
      navigate(`/summary/${fileName}`, { state: { docs, fileName } });
    } else {
      setError("Please upload a file to summarize.");
    }
  };

  return (
    <div className="flex flex-col items-center w-screen p-6 ">
      <div className="relative w-full max-w-3xl border-2 border-gray-300 rounded-md border-dashed hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 ease-in-out">
        <label
          className="flex flex-col items-center justify-center h-44 w-full cursor-pointer font-semibold text-gray-600 p-6"
          htmlFor="uploadedFile"
        >
          <div className="flex items-center justify-center mb-2">
            <div className="bg-sky-100 rounded-full flex items-center justify-center h-16 w-16 text-blue-500 group-hover:text-blue-600 transition-all duration-300 ease-in-out">
              <FiUploadCloud fontSize={35} />
            </div>
          </div>
          <p className="text-lg text-gray-700">
            {fileName ? (
              <span className="font-semibold text-blue-500 line-clamp-1">
                {fileName}
              </span>
            ) : (
              <>
                Drag & drop file or{" "}
                <span className="text-blue-500">Click to Upload</span>
              </>
            )}
          </p>
          {/* Display supported formats and error messages */}

          {error ? (
            <p className="mt-2 text-red-500">{error}</p>
          ) : (
            <p className="mt-4 text-sm text-gray-500">
              Supported formats:{" "}
              <span className="font-semibold text-green-500">
                PDF, DOCX, TXT
              </span>
            </p>
          )}
        </label>
        <input
          id="uploadedFile"
          type="file"
          className="absolute inset-0 cursor-pointer opacity-0"
          onChange={handleFileChange}
        />
      </div>
      <button
        onClick={handleSummarize}
        className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-sky-600 transition-all duration-300 ease-in-out"
      >
        Summarize
      </button>
    </div>
  );
};

export default FileUpload;
