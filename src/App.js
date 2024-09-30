import { Navbar } from "./compos/Navbar/Navbar"; // नामित निर्यात के लिए कर्ली ब्रेसेस का उपयोग करें
import { HashRouter as Router } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <MainRoutes />
      </Router>
    </>
  );
};