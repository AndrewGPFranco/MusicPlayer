import { Link } from "react-router-dom";
import styles from "./Texto.module.css";

function Texto() {
  return (
    <>
      <div className={styles.notfound}>
        <h1>404 - Not Found</h1>
        <Link to="/">Access Home</Link>
      </div>
    </>
  );
};

export default Texto;
