import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StudentsContextProvider } from './context/StudentsContext';
import { CoursesContextProvider } from './context/CoursesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoursesContextProvider>
      <StudentsContextProvider>
        <App />
      </StudentsContextProvider>
    </CoursesContextProvider>
  </React.StrictMode>
)