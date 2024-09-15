import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";
import { BsGrid, BsPersonFill, BsPeopleFill } from "react-icons/bs";
import { ImFileText2 } from "react-icons/im";
import { FiBriefcase } from "react-icons/fi";

function MyState({ children }) {
  const [isLeftSideBarOpen, setIsLeftSideBarOpen] = useState(true);
  const [isRightSideBarOpen, setIsRightSideBarOpen] = useState(true);
  const [isBottomSideBarOpen, setIsBottomSideBarOpen] = useState(true);
  const [isTradeOpen, setIsTradeOpen] = useState(false);
  const [choosedLoginOption, setChoosedLoginOption] = useState(3);
  const [dashboardScreen, setDashboardScreen] = useState();
  const [isOTPVerificationVisible, setisOTPVerificationVisible] =
    useState(false);

  const [navOptions, setNavOptions] = useState([
    {
      name: "Dashboard",
      isSelected: true,
      icon: <BsGrid />,
      nav: "mainHome",
    },
    {
      name: "My Journal",
      isSelected: false,
      icon: <ImFileText2 />,
      nav: "myJournal",
    },
    {
      name: "Performance Analytics",
      isSelected: false,
      icon: <FiBriefcase />,
      nav: "performanceAnalytics",
    },
    {
      name: "Accountability Partner",
      isSelected: false,
      icon: <BsPeopleFill />,
      nav: "accountabilityPartner",
    },
    {
      name: "My Account",
      isSelected: false,
      icon: <BsPersonFill />,
      nav: "myAccount",
    },
  ]);

  const toggleLeftSideBar = () => {
    setIsLeftSideBarOpen(!isLeftSideBarOpen);
  };

  const toggleRightSideBar = () => {
    setIsRightSideBarOpen(!isRightSideBarOpen);
  };

  const toggleBottomSideBar = () => {
    setIsBottomSideBarOpen(!isBottomSideBarOpen);
  };

  return (
    <MyContext.Provider
      value={{
        isLeftSideBarOpen,
        isRightSideBarOpen,
        isBottomSideBarOpen,
        toggleRightSideBar,
        toggleBottomSideBar,
        toggleLeftSideBar,
        isTradeOpen,
        setIsTradeOpen,
        choosedLoginOption,
        setChoosedLoginOption,
        isOTPVerificationVisible,
        setisOTPVerificationVisible,
        dashboardScreen,
        setDashboardScreen,
        navOptions,
        setNavOptions,
        setIsLeftSideBarOpen,setIsRightSideBarOpen
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
