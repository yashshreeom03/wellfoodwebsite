import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Componets/Header/Header"
import Home from "./Pages/Home/Home"
import MenuRestaurant from "./Pages/MenuRestaurant/MenuRestaurant"
import Footer from "./Componets/Footer/Footer"
import AppointmentForm from "./Componets/AppointmentForm/AppointmentForm"
import MenuPizza from "./Pages/MenuPizza/MenuPizza"
import MenuGrill from "./Pages/MenuGrill/MenuGrill"
import MenuBurger from "./Pages/MenuBurger/MenuBurger"

function App() {

  return (
    <>
        <Header />
        <AppointmentForm />
        {/* <Preloader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MenuRestaurant" element={<MenuRestaurant />} />
          <Route path="/MenuPizza" element={<MenuPizza />} />
          <Route path="/MenuGrill" element={<MenuGrill />} />
          <Route path="/MenuBurger" element={<MenuBurger />} />
        </Routes>
        <Footer />
    </>
  )
}


export default App
