import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, onOpen, onImage }) {
  return (
    <ul className="space-y-4">
      {recipes.map((r) => (
        <RecipeCard
          key={r.name}
          recipe={r}
          onOpen={onOpen}
          onImage={onImage}
        />
      ))}
    </ul>
  );
}
