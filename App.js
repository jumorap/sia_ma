import React from 'react';
import MyApp from "./src/Pages/Appbar"
import InfoPersonal from "./src/Pages/InfoPersonal";
import InfoAcademica from "./src/Pages/InfoAcademica";
import Login from "./src/Pages/Session";
import Horario from "./src/Pages/Horario";


export default function App() {
  return (
    <MyApp>
        <Login />
        <InfoPersonal />
        <InfoAcademica />
        <Horario />
    </MyApp>
  )
}
