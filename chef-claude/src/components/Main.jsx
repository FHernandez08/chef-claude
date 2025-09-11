export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((ingredient) => {
    <li key={ingredient}>{ingredient}</li>;
  });

  function submitForm(event) {
    event.preventDefault();
    console.log("Form Submitted!");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  return (
    <main>
      <form onClick={submitForm} className="add-ingredient-form">
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <ul>{ingredientsListItems}</ul>
    </main>
  );
}