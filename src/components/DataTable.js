import React from 'react';

function DataTable({ data, editData, deleteData, setEditIndex }) {
  const handleEdit = (index) => {
    setEditIndex(index); // Set editIndex to the selected index
  };

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                
                <button onClick={() => deleteData(index)}>Delete</button>
              <br></br>
            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
