import './FoodPairing.scss';

const FOODS = {
  korea: <img src="/images/bibimbap.png" alt="비빔밥사진" />,
  japanese: <img src="/images/onigiri.png" alt="주먹밥사진" />,
  chinese: <img src="/images/buns.png" alt="만두사진" />,
  pizza: <img src="/images/pizza.png" alt="만두사진" />,
};

const FoodPairing = ({ productInfo }) => {
  const imgSrc = productInfo.image_url;

  return (
    <section className="foodpairing">
      <div className="foodPairingDes">
        <div>
          <span>
            Our wine experts think this Southern Italy Primitivo wine would be a
            match made in heaven with these dishes. Bon appétit!
          </span>
          <span>
            Are you cooking something else? Search for wines by food pairings
          </span>
        </div>
      </div>
      <div className="detailTopImg">
        <img alt="소주병" src={imgSrc} className="detailProductImg" />
      </div>
      <div className="foodPairingIconContainer">
        {productInfo.food_category.map(item => FOODS[item])}
      </div>
    </section>
  );
};

export default FoodPairing;
