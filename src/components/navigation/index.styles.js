import styled from "styled-components";
import { Link } from "react-router-dom";
export const SideNav = styled.ul`
  width: 150px;
  height: 100vh;
  padding: 10px;
  background-color: #1f4e78;
  position: fixed;
`;

export const NavItem = styled.li`
  list-style: none;
  padding: 10px;
  &:not(:first-child) {
    border-bottom: 1px solid white;
    &:hover {
      border-radius: 5px;
      background-color: white;
      a {
        color: gray;
      }
      svg {
        fill: gray;
      }
    }

    ${({ active }) =>
      active &&
      `
    border-radius: 5px;
      background-color: white;
      a {
        color: gray;
      }
      svg {
        fill: gray;
      }
    `}
  }
`;

export const Anchor = styled(Link)`
  color: white;
  text-decoration: none;
  svg {
    fill: white;
    height: 25px;
    width: 25px;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border: 2px solid white;
  object-fit: cover;
  border-radius: 50%;
`;

export const Icon = styled.span`
  margin-right: 10px;
`;

export const AnchorItems = styled.div`
  /* padding-bottom: 10px; */
  position: relative;
`;

export const Label = styled.p`
  margin: 0;
  text-transform: capitalize;
`;

export const Badge = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: #dd4245;
  color: white;
  text-align: center;
  font-size: 11px;
  border: 2px solid #dd4245;
  position: absolute;
  bottom: 20px;
  right: 0;
`;
