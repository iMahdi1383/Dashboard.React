import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';

const Sidebar = () => {
  const isMenuActived = true;
  const normalLinkStyles = 'flex items-center gap-5 px-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const activeLinkStyles =
    'flex items-center gap-5 px-4 pt-3 pb-2.5 rounded-xl text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="mr-3 pb-10 h-screen md:overflow-hidden md:hover:overflow-auto overflow-auto">
      {isMenuActived && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => {}} className="items-center gap-3 mr-3 mt-4 flex text-2xl font-black dark:text-white text-slate-900">
              <SiShopware /> <span> آکولاد </span>
            </Link>
            <TooltipComponent content="بستن منو" position="BottomCenter">
              <button type="button" onClick={() => {}} className="text-xl rounded-2xl p-3 hover:bg-light-gray mt-4 block md:hidden">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <span className="block text-gray-400 m-3 mt-4 text-md font-bold">{item.title}</span>
                  {item.links.map((link) => {
                    return (
                      <NavLink
                        to={`/${link.path}`}
                        key={link.path}
                        onClick={() => {}}
                        className={(isActive) => (isActive ? activeLinkStyles : normalLinkStyles)}
                      >
                        {link.icon}
                        <span>{link.name}</span>
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
