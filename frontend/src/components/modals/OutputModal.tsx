import ExtractedTextType from "../../types/ExtractedTextType";
import Modal from "../modalWrapper/ModalWrapper";

export default function OutputModal({
  output,
  handleModalClose,
}: {
  output: ExtractedTextType;
  handleModalClose: () => void;
}) {
  return (
    <>
      <Modal
        title="Extracted Text"
        handleModalClose={handleModalClose}
        actionHandler={handleModalClose}
        action="New"
        cancelHandler={handleModalClose}
      >
        <div className="output">
          <h2>Extracted Text</h2>
          <h2>Bold Text</h2>
          <p className="extracted_text">{output.text}</p>
          <p className="bold_text">{output.bold_text}</p>
        </div>
      </Modal>
    </>
  );
}
