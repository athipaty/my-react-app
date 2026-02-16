import ImageWithLoader from "./ImageWithLoader";

export default function RecipeCard({ recipe, onOpen, onImage }) {
  return (
    <li className="flex flex-col items-center gap-2">
      <ImageWithLoader
        src={recipe.image}
        alt={recipe.name}
        wrapperClass="w-20 h-20 shadow cursor-pointer"
        imgClass="w-20 h-20 object-cover"
        onClick={() => onImage(recipe.image)}
      />

      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => onOpen(recipe)}
      >
        {recipe.name}
      </button>
    </li>
  );
}
