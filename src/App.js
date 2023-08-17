import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useStateContext} from './contexts/ContextProvider';

import {CiSettings} from 'react-icons/ci'
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
  const {isMenuActived} = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex releative dark:bg-main-dark-bg">
          {/* ThemeSettingsButton */}
          <div className="fixed left-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="تنظیمات قالب" position="TopCenter">
              <button type="button" className="p-3 text-4xl text-white transition-all bg-blue-500 shadow-xl rounded-3xl shadow-blue-300 hover:bg-blue-600">
                <CiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          {isMenuActived ? (
            <div className="fixed bg-white sidebar w-72 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 bg-white dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* Navbar */}
          <div className={`bg-main-bg dark:bg-main-bg min-h-screen w-full ${isMenuActived ? 'md:mr-72' : 'flex-2'}`}>
            <div className="fixed w-full navbar md:static bg-main-bg dark:bg-main-dark-bg">
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
              <Route path="/line-chart" element={<Line />} />
              <Route path="/area-chart" element={<Area />} />
              <Route path="/bar-chart" element={<Bar />} />
              <Route path="/pie-chart" element={<Pie />} />
              <Route path="/financial-chart" element={<Financial />} />
              <Route path="/color-mapping-chart" element={<ColorMapping />} />
              <Route path="/pyramid-chart" element={<Pyramid />} />
              <Route path="/stacked-chart" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
