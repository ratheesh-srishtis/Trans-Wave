import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import PrivateRoute from "./protected/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./error/ErrorBoundary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllPdaValuesApi, getDashbordDetails } from "./services/apiService";
import Sidebar from "./views/Sidebar";
import Header from "./views/Header";
import Content from "./views/Content";
import SendOTP from "./auth/SendOTP";
import OtpVerification from "./auth/OtpVerification";
import ResetPassword from "./auth/ResetPassword";
import NotFound from "./views/NotFound";
import { ChatProvider } from "./views/ChatContext";
import brand from "./config/brandConfig"; // Importing brand configuration
const App = () => {
  // State variables for each select option
  const [vessels, setVessels] = useState([]);
  const [ports, setPorts] = useState([]);
  const [cargos, setCargos] = useState([]);
  const [vesselTypes, setVesselTypes] = useState([]);
  const [services, setServices] = useState([]);
  const [customers, setCustomers] = useState([]);

  // Fetch PDA values on component mount
  useEffect(() => {
    const fetchPdaValues = async () => {
      try {
        const response = await getAllPdaValuesApi();
        if (response.status) {
          setVessels(response.vessels);
          setPorts(response.ports);
          setCargos(response.cargos);
          setVesselTypes(response.vesselTypes);
          setServices(response.services);
          setCustomers(response.customers);
        }
      } catch (error) {
        console.error("Error fetching PDA values:", error);
      }
    };

    fetchPdaValues();
  }, []);

  // <Router basename="/project/transocean">
  // https://transocean.srishtis.com/
  // "homepage": "https://hybrid.sicsglobal.com/project/transocean/",
  // "homepage": "https://transoceanonline.com/",

  // "homepage": "https://transocean.srishtis.com/",
  // REACT_APP_API_URL=https://hybrid.sicsglobal.com/transocean_api

  //stagging infos
  //   REACT_APP_API_URL=https://hybrid.sicsglobal.com/transocean_api/

  // REACT_APP_FILE_URL=https://hybrid.sicsglobal.com/transocean_api/assets/template_pdf/

  // REACT_APP_ASSET_URL = https://hybrid.sicsglobal.com/transocean_api/assets/

  //staggingproduction
  //   REACT_APP_API_URL=https://transocean.srishtis.com/transocean_api/

  // REACT_APP_FILE_URL=https://transocean.srishtis.com/transocean_api/assets/template_pdf/

  // REACT_APP_ASSET_URL = https://transocean.srishtis.com/transocean_api/assets/

  const [notFound, setNotFound] = useState(false);

  const handleNotFound = (value) => {
    setNotFound(value);
  };

  useEffect(() => {
    console.log(notFound, "notFound");
  }, [notFound]);

  useEffect(() => {
    document.title = brand.title;
  }, []);

  useEffect(() => {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebarMenu = document.getElementById("sidebarMenu");

    const toggleHandler = () => {
      sidebarMenu?.classList.toggle("show");
    };

    const outsideClickHandler = (event) => {
      if (
        sidebarMenu?.classList.contains("show") &&
        !sidebarMenu.contains(event.target) &&
        !sidebarToggle.contains(event.target)
      ) {
        sidebarMenu.classList.remove("show");
      }
    };

    // ✅ New: close sidebar when a menu item is clicked
    const menuItemClickHandler = () => {
      sidebarMenu?.classList.remove("show");
    };

    // Attach listener to the toggle button
    sidebarToggle?.addEventListener("click", toggleHandler);

    // Attach listener for outside click
    document.addEventListener("click", outsideClickHandler);

    // Attach listeners to all menu items inside the sidebar
    const menuItems = document.querySelectorAll(
      "#sidebarMenu a, #sidebarMenu button"
    );
    menuItems.forEach((item) => {
      item.addEventListener("click", menuItemClickHandler);
    });

    // Clean up all event listeners
    return () => {
      sidebarToggle?.removeEventListener("click", toggleHandler);
      document.removeEventListener("click", outsideClickHandler);
      menuItems.forEach((item) => {
        item.removeEventListener("click", menuItemClickHandler);
      });
    };
  }, []);

  return (
    <>
      <ErrorBoundary>
        <Router basename="">
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/send-otp" element={<SendOTP />} />
              <Route path="/otp-verification" element={<OtpVerification />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              {/* <Route
                path="/*"
                element={
                  <PrivateRoute>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <Sidebar />
                      <div className="fullbody">
                        <Header />
                        <Content />
                      </div>
                    </div>
                  </PrivateRoute>
                }
              /> */}
              {notFound ? (
                <Route path="*" element={<NotFound />} />
              ) : (
                <Route
                  path="/*"
                  element={
                    <PrivateRoute>
                      <ChatProvider>
                        <div style={{ display: "flex" }}>
                          <Sidebar />
                          <div className="fullbody">
                            <Header />
                            <Content onNotFound={handleNotFound} />
                          </div>
                        </div>
                      </ChatProvider>
                    </PrivateRoute>
                  }
                />
              )}
            </Routes>
          </AuthProvider>
        </Router>
      </ErrorBoundary>
      <ToastContainer />
    </>
  );
};

export default App;
