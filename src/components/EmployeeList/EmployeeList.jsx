import React from "react";

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index} className="mb-1">
            {employee.name} - {employee.department} - {employee.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
