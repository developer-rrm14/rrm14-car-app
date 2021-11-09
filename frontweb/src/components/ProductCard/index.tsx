import './styles.css';
import CarImg from 'assets/images/car-card.png';
import ButtonBuy from 'components/ButtonBuy';

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={CarImg} alt="Nome do Veiculo" />
        </div>
        <div className="card-name-container">
          <h6>Audi Supra TT</h6>
        </div>
        <div className="card-description-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div className="card-bottom-container">
          <ButtonBuy />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
