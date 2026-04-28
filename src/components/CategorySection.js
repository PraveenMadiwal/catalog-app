import ProductCard from "./product/ProductCard";

function CategorySection({ category, items }) {
  return (
    <div className="section">

      <h2>{category}</h2>

      <div className="grid">

        {items.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}

      </div>

    </div>
  );
}

export default CategorySection;