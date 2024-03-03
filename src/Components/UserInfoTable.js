import React, { useState } from "react";

const UserInfoTable = () => {
  const [userData, setUserData] = useState([
    { firstName: "", lastName: "", age: "" },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newData = [...userData];
    newData[index][name] = value;
    setUserData(newData);
  };

  const handleAddRow = () => {
    setUserData([...userData, { firstName: "", lastName: "", age: "" }]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="age"
                  value={data.age}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>+</button>
    </div>
  );
};

export default UserInfoTable;
