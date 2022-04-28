import './FoodPairing.scss';

const FoodPairing = () => {
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
        <img alt="소주병" src="images/dummy.png" className="detailProductImg" />
      </div>
      <div className="foodPairingIconContainer">
        {[1, 2, 3, 4, 5].map(item => (
          <div className="foodPairinIconSingle">
            {' '}
            <i class="fa-solid fa-burger"></i>{' '}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodPairing;
