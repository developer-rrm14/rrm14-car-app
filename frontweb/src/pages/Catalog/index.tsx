import ProductCard from 'components/ProductCard';
import SearchCard from 'components/SearchCard';

const Catalog = () => {
  return (
    <div className="container my-4-container">
      <div className="catalog-search">
        <SearchCard />
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 ">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
