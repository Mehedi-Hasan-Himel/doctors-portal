import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
