import FileUpload from "./FileUpload";

const Home = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="flex items-center justify-center flex-col mx-auto w-screen p-6">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
            Ready to Be <span className="text-blue-500">Amazed</span>?
          </h1>
          <p className="text-xl text-gray-700 mb-8 ">
            Upload Your{" "}
            <span className="font-semibold text-teal-500">Document</span> and
            Get Instant
            <span className="font-semibold text-orange-500"> Summaries</span>
          </p>
        </div>

        <FileUpload />
      </div>
    </div>
  );
};

export default Home;
