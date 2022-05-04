import './Orgin.scss';

const Origin = ({ productInfo }) => {
  const originArry = Object.entries(productInfo);
  console.log(originArry);

  return (
    <table className="origin">
      <tbody>
        {originArry.map(item => (
          <tr>
            <th>
              <div className="originTitle">
                <span>아이콘</span>
                <span>{item[0]}</span>
              </div>
            </th>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Origin;
