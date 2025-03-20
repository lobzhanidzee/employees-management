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
    if (!formData.name || !formData.department) {
      alert("Name and department are required.");
      return;
    }
    addEmployee(formData);
    setFormData({ name: "", department: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Add New Employee</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 mb-2 block"
      />
      <input
        type="text"
        placeholder="Department"
        value={formData.department}
        onChange={(e) =>
          setFormData({ ...formData, department: e.target.value })
        }
        className="border p-2 mb-2 block"
      />
      <input
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        className="border p-2 mb-2 block"
      />
      <button type="submit" className="bg-purple-500 text-white px-4 py-2">
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
