import React, { useState, useEffect } from "react";
import {
  Icon,
  Label,
  Badge,
  Avatar,
  Anchor,
  SideNav,
  NavItem,
  AnchorItems,
} from "./index.styles";

export const Sidebar = ({ items, params }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <>
      <SideNav
        defaultActiveKey="/home"
        className="d-flex flex-column justify-content-between"
      >
        <NavItem>
          <Avatar src="https://bit.ly/389CH0i" roundedCircle />
        </NavItem>
        {items &&
          items.map((item, index) => (
            <NavItem key={index} active={active === index}>
              <Anchor
                to={item.label}
                alt={item.label}
                active={active === index}
                onClick={() => setActive(index)}
              >
                <AnchorItems className="d-flex justify-content-start align-items-center">
                  <Badge>5</Badge>
                  <Icon>{item.icon}</Icon> <Label>{item.label}</Label>
                </AnchorItems>
              </Anchor>
            </NavItem>
          ))}
      </SideNav>
    </>
  );
};

export default Sidebar;
