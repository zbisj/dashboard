import React from "react";
import { Circle, ListItems, ListItem } from "./index.styles";
export const Feed = ({ actions }) => {
  return (
    <div className="p-3 col-lg-3 bg-secondary bg-opacity-10">
      <h6 className="text-center text-secondary">Actions</h6>
      <ListItems className="border-bottom border-2">
        <ListItem>
          <Circle className="border rounded-circle border-2  me-3 border-danger text-danger">
            {actions.overdue}
          </Circle>
          <p className="m-0 text-secondary">Overdue</p>
        </ListItem>
        <ListItem>
          <Circle className="border rounded-circle border-2  me-3 border-warning text-warning">
            {actions.draft}
          </Circle>
          <p className="m-0 text-secondary">Draft</p>
        </ListItem>
        <ListItem>
          <Circle className="border rounded-circle border-2  me-3 border-info text-info">
            {actions.pending}
          </Circle>
          <p className="m-0 text-secondary">Pending</p>
        </ListItem>
        <ListItem>
          <Circle className="border rounded-circle border-2  me-3 border-success text-success">
            {actions.completed}
          </Circle>
          <p className="m-0 text-secondary">Completed</p>
        </ListItem>
      </ListItems>
    </div>
  );
};

export default Feed;
