import { useRef, useState } from "react";
import "./App.css";
import UploadModal from "./components/modals/UploadModal";
import OutputModal from "./components/modals/OutputModal";
import ExtractedTextType from "./types/ExtractedTextType";
import API from "./lib/api";

type ModalsType = "upload" | "output" | "";

function App() {
  const [openModal, setOpenModal] = useState<ModalsType>("");
  const [output, setOutput] = useState<ExtractedTextType>();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleOpenModal = (name: ModalsType) => {
    setOpenModal(name);
  };
  const handleCloseModal = () => {
    setOpenModal("");
  };
  const handleUpload = async () => {
    if (!inputRef.current || isLoading) return; // Ensure ref exists
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", inputRef.current.files![0]);
    try {
      const resp = await API.post("/", formData, {
        "Content-Type": "multipart/form-data",
      });
      if (resp && resp.status == 200) {
        setIsLoading(false);
        setOutput(resp.data.data as ExtractedTextType);
        setOpenModal("output");
      } else {
        throw new Error(resp.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <main>
      {openModal === "upload" && (
        <UploadModal
          handleModalClose={handleCloseModal}
          inputRef={inputRef}
          handleUpload={handleUpload}
          isLoading={isLoading}
        />
      )}
      {openModal === "output" && output && (
        <OutputModal handleModalClose={handleCloseModal} output={output} />
      )}

      <div className="center">
        <button onClick={() => handleOpenModal("upload")} type="button">
          Extract Text!
        </button>
      </div>
    </main>
  );
}

export default App;
