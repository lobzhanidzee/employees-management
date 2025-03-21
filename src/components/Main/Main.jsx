import React, { useContext } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import EmployeeList from "../EmployeeList/EmployeeList";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";

const Main = () => {
  const { filteredEmployees } = useContext(EmployeeContext);

  return (
    <main className="p-4">
      <div className="container mx-auto p-6 flex">
        <div className="flex-1">
          <EmployeeForm />
        </div>
        <div className="flex-1 content-center">
          <SearchBar />
          <Filter />
        </div>
      </div>
      <EmployeeList employees={filteredEmployees} />
    </main>
  );
};

export default Main;
