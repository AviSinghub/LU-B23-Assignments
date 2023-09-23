import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster/>
      <div>
        <Navbar />
        <main className="pt-16 bg-zinc-200 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
