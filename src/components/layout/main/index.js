import React from "react";
import Sidebar from "../../../components/navigation";
import Topbar from "../../../components/layout/topbar";

import { ReactComponent as SunIcon } from "../../../assets/icons/lnr-sun.svg";
import { ReactComponent as FlagIcon } from "../../../assets/icons/lnr-flag.svg";
import { ReactComponent as MoveIcon } from "../../../assets/icons/lnr-move.svg";
import { ReactComponent as StarIcon } from "../../../assets/icons/lnr-star.svg";
import { ReactComponent as UsersIcon } from "../../../assets/icons/lnr-home.svg";
import { ReactComponent as BicycleIcon } from "../../../assets/icons/lnr-bicycle.svg";
import { ReactComponent as HeartPulseIcon } from "../../../assets/icons/lnr-heart-pulse.svg";
import { ReactComponent as CoachIcon } from "../../../assets/icons/lnr-graduation-hat.svg";

export const MainLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar
        items={[
          { label: "home", icon: <UsersIcon />, active: true },
          {
            label: "perform",
            icon: <FlagIcon />,
            active: false,
          },
          {
            label: "grow",
            icon: <SunIcon />,
          },
          {
            label: "live",
            icon: <HeartPulseIcon />,
          },
          {
            label: "choose",
            icon: <MoveIcon />,
          },
          {
            label: "aspire",
            icon: <StarIcon />,
          },
          {
            label: "coach",
            icon: <CoachIcon />,
          },
          {
            label: "talent",
            icon: <BicycleIcon />,
          },
        ]}
      />
      <div className="w-100">
        <Topbar name="Myra Sekgororoane" title="Chief Executive Officer" />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
