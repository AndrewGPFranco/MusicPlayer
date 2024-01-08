import photo from "../../assets/perfil.jpg"
import style from "./Photograph.module.css"

const Photograph = () => {
  return (
    <div className={style.photograph}>
      <img src={photo} alt="Foto de Perfil" />
    </div>
  )
}

export default Photograph;