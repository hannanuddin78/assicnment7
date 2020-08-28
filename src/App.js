import React from 'react';
import './App.css';
import AllCourse from './components/AllCourse/AllCourse';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center">Welcome to Our Teaching Home</h1>
          <AllCourse></AllCourse>
        </div>
      </div>
    </div>
  );
}

export default App;
