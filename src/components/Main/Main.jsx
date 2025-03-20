import React, { useContext } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import EmployeeList from "../EmployeeList/EmployeeList";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import SortButton from "../SortButton/SortButton";

const Main = () => {
  const { filteredEmployees } = useContext(EmployeeContext);

  return (
    <main className="h-[90vh] p-4">
      <h1 className="text-3xl font-bold underline mb-4">Employee Management</h1>
      <SearchBar />
      <Filter />
      <SortButton />
      <EmployeeList employees={filteredEmployees} />
      <EmployeeForm />
    </main>
  );
};

export default Main;
