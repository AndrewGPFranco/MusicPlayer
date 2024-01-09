import { useState, useEffect } from "react";

const Card = () => {
  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../public/categoryHome.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Erro ao carregar dados JSON", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Renderizando Dados JSON com React</h1>
      {jsonData && (
        <ul>
          {jsonData.map((item, index) => (
            <li key={index}>{item.category}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
