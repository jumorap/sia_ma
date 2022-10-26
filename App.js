import React from 'react';
import MyApp from "./src/Pages/Appbar"
import InfoPersonal from "./src/Pages/InfoPersonal";
import InfoAcademica from "./src/Pages/InfoAcademica";
import Horario from "./src/Pages/Horario";
import Login from "./src/Pages/Session";


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
