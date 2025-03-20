import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";

const SortButton = () => {
  const { filteredEmployees, setFilteredEmployees } =
    useContext(EmployeeContext);
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = () => {
    const sorted = [...filteredEmployees].sort((a, b) =>
      isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

    setFilteredEmployees(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <button
      onClick={handleSort}
      className="bg-yellow-500 text-white px-4 py-2 mb-4"
    >
      Sort Alphabetically
    </button>
  );
};

export default SortButton;
