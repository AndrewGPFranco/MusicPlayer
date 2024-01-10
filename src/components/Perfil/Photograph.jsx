import photo from "../../assets/perfil.jpg"
import style from "./Photograph.module.css"

function Photograph() {
  return (
    <div className={style.photograph}>
      <img src={photo} alt="Foto de Perfil" />
    </div>
  )
}

export default Photograph;