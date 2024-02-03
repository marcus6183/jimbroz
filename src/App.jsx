import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";

function App() {
    return (
        <div class="absolute inset-0 h-fit w-full bg-slate-100 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/exercises" element={<Exercises />}></Route>
            </Routes>
        </div>
    );
}

export default App;
