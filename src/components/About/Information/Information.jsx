import clock from "../../../assets/time.png"
import settings from "../../../assets/settings.png"
import right from "../../../assets/right.png"
import style from "./Information.module.css"

export default function Information() {
    return (
        <div className={style.information}>
            <div className={style.container}>
                <img src={clock} alt="Clock" />
                <p><scan className={style.scan}>One week</scan> to develop!</p>
            </div>
            <div className={style.container}>
                <img src={settings} alt="Settings" />
                <p>Developed in <scan className={style.scan}>Replit</scan> and <scan className={style.scan}>Vs Code</scan>!</p>
            </div>
            <div className={style.container}>
                <img src={right} alt="Right" />
                <p>All Right Reserved to <scan className={style.scan}>Andrew Silva</scan>!</p>
            </div>
        </div>
    )
}