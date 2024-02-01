import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";

function App() {
    return (
        <div className="w-full h-fit bg-slate-200">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/exercises" element={<Exercises />}></Route>
            </Routes>
        </div>
    );
}

export default App;
