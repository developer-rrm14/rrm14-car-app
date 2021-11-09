import './styles.css';

const ButtonSearch = () => {
  return (
    <>
      <div className="search-container">
        <div className="btn-search-container">
          <p>Digite sua busca</p>
        </div>
        <button className="btn-search">
          <h6>BUSCAR</h6>
        </button>
      </div>
    </>
  );
};

export default ButtonSearch;
