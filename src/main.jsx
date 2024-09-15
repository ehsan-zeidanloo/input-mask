import styles from "./Main.module.css";

/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, input, closestCity }) => {
  console.log(closestCity);
  return (
    <div className={styles.input}>
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        value={input}
        style={{ width: "300px", position: "relative" }}
      />
      {closestCity && input && (
        <span
          style={{
            position: "absolute",
            left: `${input.length * 30}px`, // Adjust according to input character width
            top: "50%",
            transform: "translateY(-50%)",
            color: "blue",
            padding: "2px",
            pointerEvents: "none",
          }}
          className={styles.suggestions}
        >
          {closestCity.slice(input.length)}
        </span>
      )}
      <h1>{closestCity}</h1>
    </div>
  );
};

export default Input;
