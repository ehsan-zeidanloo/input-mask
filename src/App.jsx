import { useState, useEffect } from "react";
import Input from "./Main";
import cities from "./cities.json";
import styles from "./Main.module.css";

// تابع محاسبه فاصله املایی
function levenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function App() {
  const [input, setInput] = useState("");
  const [closestCity, setClosestCity] = useState("");

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);

    if (userInput) {
      const distances = cities.map((city) => ({
        city: city,
        distance: levenshtein(userInput, city),
      }));

     
      const closestCity =
        distances.sort((a, b) => a.distance - b.distance)[0]?.city || "";
      if (closestCity !== userInput) {
        setClosestCity(closestCity);
      } else {
        setClosestCity("");
      }
    } else {
      setClosestCity("");
    }
  };


  return (
    <div>
      <h1>ehsan zidi</h1>
      <Input
        value={input}
        handleChange={handleChange}
        hint="نام شهر را وارد کنید"
        closestCity={closestCity}
      />
     
    </div>
  );
}

export default App;
