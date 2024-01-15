import clock from "../../../assets/time.png"
import settings from "../../../assets/settings.png"
import right from "../../../assets/right.png"
import style from "./Information.module.css"

export default function Information() {
    return (
        <div className={style.information}>
            <div className={style.container}>
                <img src={clock} alt="Clock" />
                <p>One week to developer!</p>
            </div>
            <div className={style.container}>
                <img src={settings} alt="Settings" />
                <p>Developer in Repl.it and Vs Code!</p>
            </div>
            <div className={style.container}>
                <img src={right} alt="Right" />
                <p>All Right Reserved to Andrew Silva!</p>
            </div>
        </div>
    )
}