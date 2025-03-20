import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";

const Filter = () => {
  const { employees, setFilteredEmployees } = useContext(EmployeeContext);
  const [department, setDepartment] = useState("");

  const handleFilter = () => {
    const filtered = employees.filter((emp) =>
      emp.department.toLowerCase().includes(department.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter by department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleFilter}
        className="bg-green-500 text-white px-4 py-2"
      >
        Filter
      </button>
    </div>
  );
};

export default Filter;
