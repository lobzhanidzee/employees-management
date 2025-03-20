import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";

const SearchBar = () => {
  const { employees, setFilteredEmployees } = useContext(EmployeeContext);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filtered = employees.filter((emp) =>
      emp.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
