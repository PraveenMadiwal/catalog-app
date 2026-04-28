import { useParams, Link } from "react-router-dom";
import data from "../data/products.json";

function Detail() {

  const { name } = useParams();

  const product = data.find(
    item => item.itemname === name
  );

  return (
    <div className="detail-page">

      <Link to="/">← Back</Link>

      <h1>{product.itemname}</h1>

      <h3>{product.category}</h3>

      <img
        src={product.image}
        alt={product.itemname}
        className="detail-img"
      />

      <div className="props">

        {/* Dynamic properties */}
        {product.itemprops.map((prop, index) => (
          <div key={index} className="prop-box">

            <strong>{prop.label}:</strong> {prop.value}

          </div>
        ))}

      </div>

    </div>
  );
}

export default Detail;