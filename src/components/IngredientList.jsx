// src/components/IngredientList.jsx
const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredient.map((ingredient) => (
        <li style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button>-</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
