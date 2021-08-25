import React from "react";
import { Image, TopBarContianer } from "./index.styles";
import BotswanaImage from "../../../assets/images/botswana-tourism.png";
export const Topbar = ({ name, title }) => {
  return (
    <TopBarContianer className="d-flex justify-content-between align-items-center p-2 w-100">
      <div>
        <h5 className="text-light">{name}</h5>
        <p className="text-light m-0">{title}</p>
      </div>
      <Image src={BotswanaImage} alt="Botswana Tourism" />
    </TopBarContianer>
  );
};

export default Topbar;
