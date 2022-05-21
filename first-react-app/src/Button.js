import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
  // browser에서 확인해보면 각 컴포넌트가 랜덤한 className을 가지고 있게 된다.
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
