import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Activity1 from "./components/pages/Activity1";
import Activity2 from "./components/pages/Activity2";
import Activity3 from "./components/pages/Activity3";
import Activity4 from "./components/pages/Activity4";
import Activity5 from "./components/pages/Activity5";
import Activity6 from "./components/pages/Activity6";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Activity1" element={<Activity1 />} />
          <Route path="Activity2" element={<Activity2 />} />
          <Route path="Activity3" element={<Activity3 />} />
          <Route path="Activity4" element={<Activity4 />} />
          <Route path="Activity5" element={<Activity5 />} />
          <Route path="Activity6" element={<Activity6 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
