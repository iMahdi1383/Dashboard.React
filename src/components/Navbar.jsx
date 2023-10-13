import React, { useEffect } from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// Icons
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent
    content={title}
    position="BottomCenter"
  >
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative p-3 text-xl rounded-full hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    isMenuActivated,
    setIsMenuActivated,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex justify-between p-2 md:mx-6 ">
      <NavButton
        title="منو"
        customFunc={() => setIsMenuActivated((prev) => !prev)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="سبد خرید"
          customFunc={() => handleClick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="چت"
          dotColor={'#03c9d7'}
          customFunc={() => handleClick('chat')}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="نوتیفیکیشن ها"
          dotColor={'#03c9d7'}
          customFunc={() => handleClick('notification')}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent
          content={'پروفایل'}
          position="BottomCenter"
        >
          <div
            className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray"
            onClick={() => handleClick('UserProfile')}
          >
            <img
              className="w-8 h-8 rounded-full"
              src={avatar}
            />
            <p>
              <span className="text-grey-400 text-14">سلام، </span>{' '}
              <span className="font-bold text-grey-400 ms-1 text-14">
                {' '}
                مهدی
              </span>
            </p>
            <MdKeyboardArrowDown className="text-grey-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
