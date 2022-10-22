import React from 'react';
import MyComponent from "./src/Pages/Appbar"
import InfoPersonal from "./src/Pages/InfoPersonal";
import Login from "./src/Pages/Session";


export default function App() {
  return (
    <>
      <MyComponent />
      <Login />
      <InfoPersonal />
      
    </>
  )
}
