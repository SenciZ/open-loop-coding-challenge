import React from "react";
import { useState } from "react";
import FormFields from "./FormFields";
import ListItem from "./ListItem";
import "../App.css";

function FormContainer() {
  const [userList, setUserList] = useState([]);

  const setNewList = (item) => {
    setUserList([...userList, item]);
  };

  const deleteItem = (item) => {
    // Take out the item where its index matches the id of list item. Update state with new array
    setUserList(userList.filter((element, index) => index !== item));
  };
  return (
    <>
      <div className="formContainer">
        <h1> Add Users</h1>
        <div className="formFieldsContainer">
          {/* FormFields component, sending down function responsible for updating state */}
          <FormFields updateHandler={setNewList} />
        </div>
        <div className="listItemContainer">
          <ul>
            {/* If no users added display No users yet... or display nothing */}
            {userList.length === 0 ? <li>No users yet...</li> : null}
            {/* ListItem component, sending down the array of users and a delete function */}
            <ListItem data={userList} deleteHandler={deleteItem} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default FormContainer;
