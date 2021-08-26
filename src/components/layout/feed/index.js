import React from "react";
import { Circle, Square, ListItems, ListItem } from "./index.styles";
export const Feed = ({ actions, notifications }) => {
  console.log(actions);
  return (
    <div className="p-3 bg-secondary bg-opacity-10">
      <h6 className="text-center text-primary">Actions</h6>
      <ListItems className="border-bottom border-2">
        {actions &&
          actions.map((action, index) => (
            <ListItem key={index}>
              <Circle
                className={`border rounded-circle border-2  me-3 border-${action.color} d-flex justify-content-center align-items-center`}
              >
                <small className={`m-0 fs-6 text-${action.color}`}>
                  {action.value}
                </small>
              </Circle>
              <p className="m-0 text-secondary text-capitalize">
                {action.label}
              </p>
            </ListItem>
          ))}
      </ListItems>
      <h6 className="text-center text-primary pt-3">Notifications</h6>
      <ListItems>
        {notifications &&
          notifications.map((notification, index) => (
            <ListItem key={index}>
              <Square className="border border-2 me-3 border-secondary d-flex flex-column align-items-center">
                <small className="m-0 fs-6 text-secondary">
                  {notification.day}
                </small>
                <small className="m-0 fs-6 text-secondary">
                  {notification.month.substring(0, 3)}
                </small>
              </Square>
              <p className="m-0 text-secondary">
                {notification.text.length > 24
                  ? notification.text.substring(0, 24) + "..."
                  : notification.text}
              </p>
            </ListItem>
          ))}
      </ListItems>
    </div>
  );
};

export default Feed;
