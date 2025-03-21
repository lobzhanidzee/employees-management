import React, { createContext, useState, useEffect } from "react";
import initialData from "../data/employees.json";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("employees");
    const data = storedData ? JSON.parse(storedData) : initialData;
    setEmployees(data);
    setFilteredEmployees(data);
  }, []);

  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  }, [employees]);

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };

  const contextValue = {
    employees,
    filteredEmployees,
    setEmployees,
    setFilteredEmployees,
    addEmployee,
  };

  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  );
};
