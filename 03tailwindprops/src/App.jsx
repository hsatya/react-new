/* eslint-disable react/no-unescaped-entities */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import hsatyaLogo from "./assets/logo.jpg";
import "./App.css";

import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Hello React
      </h1>
      <Card username='chaiaurcode' btnText='Click Me' />
      <Card username='codewithchai' />
    </>
  );
}

export default App;
