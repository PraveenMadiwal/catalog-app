import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {

  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() =>
        navigate(`/detail/${item.itemname}`)
      }
    >

      <img src={item.image} alt={item.itemname} />

      <h3>{item.itemname}</h3>

      <p>{item.category}</p>

    </div>
  );
}

export default ProductCard;