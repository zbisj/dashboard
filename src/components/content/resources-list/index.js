import React from "react";
import { ListItem } from "./index.styles";
import { ReactComponent as UsersIcon } from "../../../assets/icons/lnr-users.svg";
import { ReactComponent as LicenseIcon } from "../../../assets/icons/lnr-license.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/icons/lnr-phone.svg";
import { ReactComponent as FileIcon } from "../../../assets/icons/lnr-file-empty.svg";
import { ReactComponent as CropIcon } from "../../../assets/icons/lnr-crop.svg";
import { ReactComponent as LockIcon } from "../../../assets/icons/lnr-lock.svg";
import { ReactComponent as ListIcon } from "../../../assets/icons/lnr-list.svg";
import { ReactComponent as BookIcon } from "../../../assets/icons/lnr-book.svg";
import { ReactComponent as AcademyIcon } from "../../../assets/icons/lnr-apartment.svg";

export const Resources = () => {
  return (
    <div className="p-3">
      <div className="border border-2 border-secondary">
        <h5 className="text-primary text-center pt-2">Resources</h5>
        <ul>
          <ListItem className="d-flex">
            <BookIcon className="me-3" />
            <p className="m-0 text-secondary">Employee Handbook</p>
          </ListItem>
          <ListItem className="d-flex">
            <UsersIcon className="me-3" />
            <p className="m-0 text-secondary">Role Profile</p>
          </ListItem>
          <ListItem className="d-flex">
            <CropIcon className="me-3" />
            <p className="m-0 text-secondary">Organogram</p>
          </ListItem>
          <ListItem className="d-flex">
            <LicenseIcon className="me-3" />
            <p className="m-0 text-secondary">Policies & SOP's</p>
          </ListItem>
          <ListItem className="d-flex">
            <FileIcon className="me-3" />
            <p className="m-0 text-secondary">Code of Conduct</p>
          </ListItem>
          <ListItem className="d-flex">
            <PhoneIcon className="me-3" />
            <p className="m-0 text-secondary">Support</p>
          </ListItem>
          <ListItem className="d-flex">
            <LockIcon className="me-3" />
            <p className="m-0 text-secondary">Safety Manual</p>
          </ListItem>
          <ListItem className="d-flex">
            <ListIcon className="me-3" />
            <p className="m-0 text-secondary">Contact List</p>
          </ListItem>
          <ListItem className="d-flex">
            <AcademyIcon className="me-3" />
            <p className="m-0 text-secondary">Academy Handbook</p>
          </ListItem>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
