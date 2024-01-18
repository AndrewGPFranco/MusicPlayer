import banner from '../../../assets/banner.jpg'
import style from './Banner.module.css'

export default function Banner() {
    return (
        <div className={style.container}>
            <img src={banner} alt="Banner de uma imagem do React Js" />
        </div>
    )
}