import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";

const Filter = () => {
  const { employees, setFilteredEmployees } = useContext(EmployeeContext);
  const [department, setDepartment] = useState("");

  const handleFilter = (e) => {
    e.preventDefault();
    const filtered = employees.filter((emp) =>
      emp.department.toLowerCase().includes(department.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <form className="max-w-md mx-auto mt-2" onSubmit={handleFilter}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Filter
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
            />
          </svg>
        </div>
        <input
          onChange={(e) => setDepartment(e.target.value)}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Filter by department"
        />
        <button
          onSubmit={handleFilter}
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Filter
        </button>
      </div>
    </form>
  );
};

export default Filter;
