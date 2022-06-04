import React from "react";
import Fruit from "./Fruit";

const fruits = [
  { id: 1, name: "Melon", have: 3, season: "summer" },
  { id: 2, name: "strawberry", have: 5, season: "spring" },
  { id: 3, name: "peach", have: 2, season: "summer" },
  { id: 4, name: "apple", have: 6, season: "autum" },
  { id: 5, name: "tangerine", have: 1, season: "winter" },
];

function App() {
  return (
    <div>
      <h1>My favorite fruits</h1>
      {fruits.map((fruit) => {
        return (
          <Fruit
            key={fruit.id}
            name={fruit.name}
            season={fruit.season}
            have={fruit.have}
          />
        );
      })}
    </div>
  );
}

export default App;
