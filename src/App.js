import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
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
} from './pages';
import './App.css';

const App = () => {
  const activeMenu = true;
  return (
    <diV>
      <BrowserRouter>
        <div className="flex releative dark:bg-main-dark-bg">

          {/* ThemeSettingsButton */}
          <div className="fixed left-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="TopCenter">
              <button type="button" className="text-3xl p-4 rounded-3xl bg-indigo-600 text-indigo-100 hover:bg-indigo-800">
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className="sidebar w-72 fixed dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          )}

          {/* Navbar */}
          <div className={`bg-main-bg dark:bg-main-bg min-h-screen w-full ${activeMenu ? 'md:mr-72' : 'flex-2'}`}>
            <div className="navbar fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
              <Navbar />
            </div>
          </div>

          {/* Routes */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              {/* Charts */}
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
        </div>
      </BrowserRouter>
    </diV>
  );
};

export default App;
