import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Forecast from "./pages/Forecast";
import DayView from "./pages/DayView";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/forecast/:date" element={<DayView />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
