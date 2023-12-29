import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { ToastContainer, toast } from "react-toastify";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./../components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./../pages";

import Patients from "./../pages/Patients";
import Blogs from "./../pages/Blogs";
import Category from "./../pages/Category";
import Chat from "./../pages/Chat";
import Register from "./../pages/Register";
import Login from "./../pages/Login";
import SetAvatar from "./../pages/SetAvatar";
import { useStateContext } from "./../contexts/ContextProvider";

export default function RoutesLayout() {
  const location = useLocation();
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  const renderLayout = !["/login", "", "/", "/register"].includes(
    location.pathname
  );

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        {renderLayout && (
          <>
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              {
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: "50%" }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              }
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
          </>
        )}
        <div
          className={
            !renderLayout
              ? ""
              : activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          {renderLayout && (
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
          )}
          <div>
            {themeSettings && <ThemeSettings />}

            <Routes>
              {<Route path="/register" element={<Register />} />}
              <Route path="/" element={<Login />} />
              <Route path="/setAvatar" element={<SetAvatar />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/patients" element={<Patients />} />

              {/* patients */}
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* blog  */}
              <Route path="/blog" element={<Blogs />} />
              <Route path="/blog-list" element={<Orders />} />
              <Route path="/add-blog" element={<Editor />} />
              <Route path="/category" element={<Category />} />
              <Route path="/add-category" element={<ColorPicker />} />
              {/* Apps  */}
              <Route path="/chat" element={<Chat />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>{" "}
    </div>
  );
}
