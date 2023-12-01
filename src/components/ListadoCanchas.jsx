import { useState, useEffect } from "react";
import { environments } from "../config/environments";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { OneCard } from "./OneCard";
import { useCustome } from "../hooks/useCustome";


export const ListadoCanchas = () => {
  
  const {filteredCanchas,searchTerm, handleSearch} = useCustome();
  return (
    <>
      <Navbar handleSearch={handleSearch} searchTerm={searchTerm} />
      <div className="container mt-3">
        <h3 className="mb-2 mt-2 text-center text-light rounded p-2" style={{ backgroundImage: 'linear-gradient(180deg,#1385be,#265d86)', color: 'white' }}>Canchas</h3>
        <div className="row" id="mostrar-canchas">
          { filteredCanchas.length === 0 ? (
            <div className="text-center mt-3">
              <img src="/img/error-404.jpeg" alt="404" style={{ width: '40%', borderRadius: '10px' }} />
            </div>
          ) : (
            filteredCanchas.map((cancha) => (
              <OneCard id={cancha.id} name={cancha.name} logo={cancha.logo} key={cancha.id}/>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
