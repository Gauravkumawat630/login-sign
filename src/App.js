import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import DataForm from './components/DataForm';
import DataTable from './components/DataTable';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleLogin = (status) => setIsLoggedIn(status);

  const handleSignUp = (newUser) => {
    setData([...data, newUser]);
    setIsSignUp(false);
  };

  const addData = (newData) => {
    if (editIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editIndex ? newData : item
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, newData]);
    }
  };

  const editData = (index, newData) => {
    const updatedData = [...data];
    updatedData[index] = newData;
    setData(updatedData);
    setEditIndex(null); // Reset editIndex after saving
  };

  const deleteData = (index) => {
    const updatedData = data.filter((item, i) => i !== index);
    setData(updatedData);
    setEditIndex(null); // Ensure editIndex is reset when deleting
  };

  return (
    <div>
      {!isLoggedIn && !isSignUp && <LoginPage onLogin={handleLogin} />}
      {!isLoggedIn && isSignUp && <SignUpPage onSignUp={handleSignUp} />}
      {isLoggedIn && (
        <div>
          <DataForm addData={addData} editIndex={editIndex} data={data[editIndex]} />
          <DataTable data={data} editData={editData} deleteData={deleteData} setEditIndex={setEditIndex} />
        </div>
      )}
      {!isLoggedIn && (
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Back to Login' : 'Sign Up'}
        </button>
      )}
    </div>
  );
}

export default App;
