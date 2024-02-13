import { LegacyRef, useState } from "react";
import Modal from "../modalWrapper/ModalWrapper";
import Loader from "../loader/Loader";

interface ImagePreviewState {
  selectedFile?: File;
  previewUrl?: string;
}
export default function UploadModal({
  handleModalClose,
  handleUpload,
  inputRef,
  isLoading,
}: {
  handleModalClose: () => void;
  handleUpload: () => void;
  inputRef: LegacyRef<HTMLInputElement>;
  isLoading: boolean;
}) {
  const [imageState, setImageState] = useState<ImagePreviewState>({});

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    setImageState({
      selectedFile,
      previewUrl: URL.createObjectURL(selectedFile),
    });
  };
  const handleFileUnSelect = () => {
    setImageState({});
  };

  return (
    <>
      <Modal
        title="Upload Photo for Extraction"
        handleModalClose={handleModalClose}
        actionHandler={handleUpload}
        action="Upload"
        cancelHandler={handleModalClose}
      >
        <Loader isLoading={isLoading} />

        <label
          htmlFor="imageUpload"
          className={`${imageState.previewUrl && "disabled"}`}
        >
          Select Image
          <input
            id="imageUpload"
            name="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={inputRef}
          />
        </label>
        {imageState.previewUrl && (
          <div className="preview" onClick={handleFileUnSelect}>
            <img src={imageState.previewUrl} alt="Preview" />
          </div>
        )}
      </Modal>
    </>
  );
}
