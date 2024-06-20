import React, { useState, useEffect } from 'react';

function DataForm({ addData, editIndex, data }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    if (editIndex !== null && data) {
      setFormData(data);
    } else {
      setFormData({ name: '', phone: '', email: '' });
    }
  }, [editIndex, data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formData);
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div>
      <h2>Data Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DataForm;
