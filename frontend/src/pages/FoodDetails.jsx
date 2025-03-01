import "../styles/FoodDetails.css";

const FoodDetails = () => {
  return (
    <div className="food-details">
      <img src="/food.jpg" alt="Food" />
      <h2>Food Name</h2>
      <p>Restaurant: XYZ</p>
      <p>Price: ₹200</p>
      <p>Rating: ★★★★☆</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default FoodDetails;
