import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useLocation } from "react-router-dom";
import DocxViewer from "./DocxViewer";
import { FcDocument } from "react-icons/fc";

const SummaryDisplay = () => {
  const location = useLocation();
  const { docs } = location.state || { docs: [] };
  const { fileName } = location.state || { fileName: "" };
  const doc = docs[0]; // Assuming only one document is selected

  return (
    <>
      <div className="text-lg font-semibold flex items-center gap-2 p-2 bg-green-300 rounded-t-lg mx-[22.4px] md:mx-12 mt-4">
        <FcDocument fontSize={30} />
        <span className="line-clamp-1 text-sm"> {fileName} </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full h-full px-6  md:px-12 ">
        {/* Document Display */}
        <div className="bg-white p-4 rounded-b-lg h-full hidden md:block">
          <div className="overflow-auto h-[85vh]">
            {/* Conditional rendering based on file type */}
            {doc.fileType ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
              <DocxViewer file={doc.file} />
            ) : (
              <DocViewer
                documents={docs}
                pluginRenderers={DocViewerRenderers}
              />
            )}
          </div>
        </div>

        {/* Summary Display */}
        <div className="bg-white p-4 rounded-b-lg h-full">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="overflow-auto h-[85vh]">
            <p> summary will appear here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryDisplay;
