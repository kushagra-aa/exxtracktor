import { ReactNode } from "react";
import "./modal-wrapper.css";

function Modal({
  handleModalClose,
  action,
  actionHandler,
  cancelHandler,
  children,
  title,
}: {
  handleModalClose: () => void;
  title: string;
  action: string;
  actionHandler: () => void;
  cancelHandler: () => void;
  children: ReactNode;
}) {
  const handleActionCancel = (): void => {
    cancelHandler();
  };

  const handleActionClick = (): void => {
    actionHandler();
  };

  return (
    <div className="modal_container">
      <div className="modal_background" onClick={handleModalClose} />
      <div className="modal_box">
        <div className="modal_header">
          <h2>{title}</h2>
        </div>
        <div className="modal_content">{children}</div>
        <div className="modal_action">
          <button onClick={handleActionClick} className="main_action">
            {action}
          </button>
          <button onClick={handleActionCancel} className="close_action">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
