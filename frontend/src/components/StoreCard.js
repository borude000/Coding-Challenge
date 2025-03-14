import { useState } from "react";
import { submitRating } from "../services/api";

const StoreCard = ({ store }) => {
  const [rating, setRating] = useState("");

  const handleRating = async () => {
    if (!rating) return alert("Select a rating");

    await submitRating({ userId: 1, storeId: store.id, ratingValue: rating });
    alert("Rating submitted!");
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{store.name}</h2>
      <p>{store.address}</p>
      <p>Rating: {store.rating || "No ratings yet"}</p>
      <div>
        <select className="border p-1" onChange={(e) => setRating(e.target.value)}>
          <option value="">Rate</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <button onClick={handleRating} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">Submit</button>
      </div>
    </div>
  );
};

export default StoreCard;
