import clock from "../../../assets/time.png"
import settings from "../../../assets/settings.png"
import right from "../../../assets/right.png"
import style from "./Information.module.css"

export default function Information() {
    return (
        <div className={style.information}>
            <div className={style.container}>
                <img src={clock} alt="Clock" />
                <p><span className={style.span}>One week</span> to develop!</p>
            </div>
            <div className={style.container}>
                <img src={settings} alt="Settings" />
                <p>Developed in <span className={style.span}>Replit</span> and <span className={style.span}>Vs Code</span>!</p>
            </div>
            <div className={style.container}>
                <img src={right} alt="Right" />
                <p>All Right Reserved to <span className={style.span}>Andrew Silva</span>!</p>
            </div>
        </div>
    )
}