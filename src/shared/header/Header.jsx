import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      // Actualizar la fecha cada segundo
      const intervalId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      // Limpiar el intervalo al desmontar el componente
      return () => clearInterval(intervalId);
    }, []); // El efecto se ejecuta solo una vez al montar el componente
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('es-ES', options);
  

  return (
    <div className="header-container">
      <img
        src="src\utils\images\logoOrica.png"
        alt="Imagen"
        className="header-logo"
      />
      <div className="header-info">
        <h2 className="header-title">{currentDate.toLocaleTimeString()}</h2>
        <p className="header-date">{formattedDate}</p>
      </div>
    </div>
  );
};

export default Header;
