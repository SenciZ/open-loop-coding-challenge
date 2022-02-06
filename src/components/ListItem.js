import React from "react";

function ListItem({ data, deleteHandler }) {
  return (
    <>
      {/* Map over the list of users and create an li for each one with their information */}
      {data.map((item, index) => {
        return (
          <li key={item.userEmail} id={index} className="listItem">
            {`${item.firstName} ${item.lastName} | ${item.userNote} | ${item.userEmail}`}
            <button onClick={() => deleteHandler(index)}>Remove</button>
          </li>
        );
      })}
    </>
  );
}

export default ListItem;
