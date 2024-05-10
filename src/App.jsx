import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div
      className="form-container"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid black",
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
