import { useState, useEffect } from "react";
import style from "./Moment.module.css";

function Moment() {
  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/musicMoment.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Erro ao carregar dados JSON", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.music}>
      {jsonData && (
        <ul>
          {jsonData.map((item, index) => (
            <li key={index}>
              <img
                src={item.image}
                alt={`Imagem da categoria ${item.category}`}
              />
              <div className={style.info}>
                <h3>{item.singer}</h3>
                <p>{item.music}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Moment;
