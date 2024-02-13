import { useRef, useState } from "react";
import "./App.css";
import UploadModal from "./components/modals/UploadModal";
import OutputModal from "./components/modals/OutputModal";
import ExtractedTextType from "./types/ExtractedTextType";

type ModalsType = "upload" | "output" | "";

const mockData: ExtractedTextType = {
  text: "Assignement, In the vast expanse of space, countless mysteries await, our, discovery:, With, each probe sent;, each telescope focused_, humanity edges closer, to, unraveling the enigmas, that lie, beyond, our, celestial, borders:, Galaxies, twirl, like, cosmic, ballets,, stars, burst forth, in, magnificent supernovas,, and, planets,, with, their, secrets, hidden, in, atmospheres, and, landscapes,, beckon, US, to, explore:, The, pursuit, of, understanding the universe drives us to push the boundaries, of technology, innovation; and human potential  Each, new, revelation sparks the imagination and fuels, our insatiable, curiosity, propelling us further into the great unknown:",
  bold_text:
    "Assignement, In the vast expanse of space, countless mysteries await, each probe sent;, each telescope focused_, humanity edges closer, unraveling the enigmas, magnificent supernovas,, understanding the universe drives us to push the boundaries, of technology, innovation; and human potential  Each, revelation sparks the imagination and fuels, our insatiable, curiosity, propelling us further into the great unknown:",
};

function App() {
  const [openModal, setOpenModal] = useState<ModalsType>("");
  const [output, setOutput] = useState<ExtractedTextType>();
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleOpenModal = (name: ModalsType) => {
    setOpenModal(name);
  };
  const handleCloseModal = () => {
    setOpenModal("");
  };
  const handleUpload = async () => {
    setOutput(mockData);
    setOpenModal("output");
  };

  return (
    <main>
      {openModal === "upload" && (
        <UploadModal
          handleModalClose={handleCloseModal}
          inputRef={inputRef}
          handleUpload={handleUpload}
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
