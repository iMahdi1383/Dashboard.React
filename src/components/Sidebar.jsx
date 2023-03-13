import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineXMark } from 'react-icons/hi2';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links, AkoladLogo } from '../data/dummy';

const Sidebar = () => {
  const isMenuActived = true;
  const normalLinkStyles = 'bg-blue-300';
  const activeLinkStyles = ' text-slate-700 dark:text-slate-200 dark:hover:bg-black hover:bg-slate-100';

  return (
    <div className="mr-3 pb-10 h-screen md:overflow-hidden md:hover:overflow-auto overflow-auto">
      {isMenuActived && (
        <>
          {/* Head */}
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => {}} className="items-end gap-3 mr-3 mt-6 flex text-2xl font-black dark:text-white text-slate-900">
              <AkoladLogo size="2.5rem" /> <span> آکولاد </span>
            </Link>
            <TooltipComponent content="بستن منو" position="BottomCenter">
              <button type="button" onClick={() => {}} className="text-2xl rounded-2xl p-3 text-slate-600 hover:bg-slate-100 mt-6 ml-2 block md:hidden">
                <HiOutlineXMark />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <span className="block text-slate-400 m-3 mt-8 text-md font-extrabold"> {item.title}</span>
                  {item.links.map((link) => {
                    return (
                      <NavLink
                        to={`/${link.path}`}
                        key={link.path}
                        onClick={() => {}}
                        className={(isActive) => `m-1 ml-2 flex items-center gap-4 px-4 py-3 rounded-2xl ${isActive ? activeLinkStyles : normalLinkStyles}`}
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span className="text-md">{link.name}</span>
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
