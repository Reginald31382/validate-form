import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div
      className="form-container"
      style={{
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        border: "2px solid black",
        padding: "25px",
      }}
    >
      <h1 className="text-header" style={{ textAlign: "center" }}>
        J'rome Studio's <br /> Order Form
      </h1>
      <MyForm />
    </div>
  );
}

export default App;
