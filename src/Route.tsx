import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import HomePage from "./Pages/HomePage";
import Navbar from "./component/Navbar";
import AboutUs from "./Pages/AboutUs";
import Authentication from "./component/Authentication";
import DashBoard from "./Pages/DashBoard";
import Footer from "./component/Footer";
export default function MainRoute() {

  return (
    <Router>
      <main className=" w-full h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<CircularProgress />}>
                <HomePage />{" "}
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<CircularProgress />}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/authentication"
            element={
              <Suspense fallback={<CircularProgress />}>
                <Authentication />
              </Suspense>
            }
          />
          </Routes>
          <DashBoard />
        <Footer />
      </main>
    </Router>
  );
}
