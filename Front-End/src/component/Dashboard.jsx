import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
    const [patients, setPatients] = useState([]);
    const [editingPatient, setEditingPatient] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        contact: "",
        medicalHistory: "",
    });
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get("http://localhost:6060/api/v1/patients");
            setPatients(response.data);
        } catch (error) {
            console.error("Error fetching patients:", error);
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (editingPatient) {
                await axios.put(`http://localhost:6060/api/v1/patients/${editingPatient.id}`, formData);
                alert("Patient updated successfully");
            } else {
                await axios.post("http://localhost:6060/api/v1/patients", formData);
                alert("Patient added successfully");
            }
            resetForm();
            fetchPatients();
        } catch (error) {
            console.error("Error saving patient:", error);
        }
    };

    const resetForm = () => {
        setFormData({ name: "", age: "", gender: "", contact: "", medicalHistory: "" });
        setEditingPatient(null);
        setShowForm(false);
    };

    const handleEdit = (patient) => {
        setEditingPatient(patient);
        setFormData({
            name: patient.name,
            age: patient.age,
            gender: patient.gender,
            contact: patient.contact,
            medicalHistory: patient.medicalHistory,
        });
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:6060/api/v1/patients/${id}`);
            alert("Patient deleted successfully");
            fetchPatients();
        } catch (error) {
            console.error("Error deleting patient:", error);
        }
    };

    const handleAddNew = () => {
        setEditingPatient(null);
        resetForm();
        setShowForm(true);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">DASHBOARD</h2>

            <button className="btn btn-success mb-3" onClick={handleAddNew}>
                Add New Patient
            </button>

            {showForm && (
                <div className="mb-4">
                    <h3>{editingPatient ? "Update Patient" : "Add Patient"}</h3>
                    <form onSubmit={handleSubmit} className="border p-4 rounded">
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                name="age"
                                id="age"
                                className="form-control"
                                placeholder="Age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="gender">Gender</label>
                            <input
                                type="text"
                                name="gender"
                                id="gender"
                                className="form-control"
                                placeholder="Gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="contact">Contact</label>
                            <input
                                type="text"
                                name="contact"
                                id="contact"
                                className="form-control"
                                placeholder="Contact"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="medicalHistory">Medical History</label>
                            <input
                                type="text"
                                name="medicalHistory"
                                id="medicalHistory"
                                className="form-control"
                                placeholder="Medical History"
                                value={formData.medicalHistory}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary me-2">
                            Save
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={resetForm}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}

            <div>
                <h3 className="mb-3">Patient List</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Medical History</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.contact}</td>
                                <td>{patient.medicalHistory}</td>
                                <td>
                                    <button className="btn btn-warning me-2" onClick={() => handleEdit(patient)}>
                                        Update
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(patient.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
