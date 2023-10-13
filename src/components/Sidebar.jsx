import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineXMark } from 'react-icons/hi2';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links, AkoladLogo } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { isMenuActivated, setIsMenuActivated } = useStateContext();
  const normalLinkStyles = 'bg-blue-300';
  const activeLinkStyles =
    ' text-slate-700 dark:text-slate-200 dark:hover:bg-black hover:bg-slate-100';

  return (
    <div className="h-screen pb-10 mr-3 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {isMenuActivated && (
        <>
          {/* Head */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-end gap-3 mt-6 mr-3 text-2xl font-black dark:text-white text-slate-900"
            >
              <AkoladLogo size="2.5rem" /> <span> آکولاد </span>
            </Link>
            <TooltipComponent
              content="بستن منو"
              position="BottomCenter"
            >
              <button
                type="button"
                onClick={() => setIsMenuActivated(false)}
                className="block p-3 mt-6 ml-2 text-2xl rounded-2xl text-slate-600 hover:bg-slate-100 md:hidden"
              >
                <HiOutlineXMark />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <span className="block m-3 mt-8 font-extrabold text-slate-400 text-md">
                    {item.title}
                  </span>
                  {item.links.map((link) => {
                    return (
                      <NavLink
                        to={`/${link.path}`}
                        key={link.path}
                        onClick={(prevIsMenuActivated) => !prevIsMenuActivated}
                        className={(isActive) =>
                          `m-1 ml-2 flex items-center gap-4 px-4 py-3 rounded-2xl ${
                            isActive ? activeLinkStyles : normalLinkStyles
                          }`
                        }
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
