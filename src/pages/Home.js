import data from "../data/products.json";
import CategorySection from "../components/CategorySection";

function Home() {

  // Get unique categories
  const categories = [...new Set(data.map(item => item.category))];

  return (
    <div className="container">

      <h1 className="title">Products Catalog</h1>

      {/* Loop categories */}
      {categories.map((cat, index) => {

        const filteredItems = data.filter(
          item => item.category === cat
        );

        return (
          <CategorySection
            key={index}
            category={cat}
            items={filteredItems}
          />
        );
      })}
    </div>
  );
}

export default Home;