import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";

const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.department ||
      formData.department === "Choose a department"
    ) {
      alert("Name and department are required.");
      return;
    }
    addEmployee(formData);
    setFormData({ name: "", department: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 w-80 flex flex-col gap-2">
      <h2 className="text-xl font-semibold mb-2">Add New Employee</h2>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Name"
        required
      />
      <select
        id="Department"
        onChange={(e) =>
          setFormData({ ...formData, department: e.target.value })
        }
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option defaultValue={"Choose a department"}>
          Choose a department
        </option>
        <option value="HR">HR</option>
        <option value="Engineering">Engineering</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Administrative">Administrative</option>
      </select>
      <input
        type="text"
        id="role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Role"
        required
      />
      <button
        type="submit"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
