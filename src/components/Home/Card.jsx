import { useState, useEffect } from "react";
import style from "./Card.module.css";

const Card = () => {
  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/categoryHome.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Erro ao carregar dados JSON", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.card}>
      {jsonData && (
        <ul>
          {jsonData.map((item, index) => (
            <li key={index}>
              <img
                src={item.image}
                alt={`Imagem da categoria ${item.category}`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;