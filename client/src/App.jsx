import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Outlet />
    <h1>hi</h1>
    </>
  );
}

export default App;
