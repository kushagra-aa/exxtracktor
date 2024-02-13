import "./loader.css";

export default function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <div className={`loader_wrapper ${isLoading && "loading"}`}>
      <div className="loader" />
      <div className="loader_in_loader" />
      <div className="loader_in_loader_in_loader" />
      <div className="loader_in_loader_in_loader_in_loader" />
      <div className="dot_in_loader_in_loader_in_loader_in_loader" />
    </div>
  );
}
