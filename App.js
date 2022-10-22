import React from 'react';
import MyApp from "./src/Pages/Appbar"
import InfoPersonal from "./src/Pages/InfoPersonal";
import Login from "./src/Pages/Session";


export default function App() {
  return (
    <MyApp>
      <Login />
      <InfoPersonal />
    </MyApp>
  )
}
