import './Orgin.scss';

const Origin = () => {
  return (
    <table className="originTable">
      <tbody>
        {[1, 2, 3, 4].map(item => (
          <tr>
            <th>
              <div className="originTitle">
                <span>아이콘</span>
                <span>이름</span>
              </div>
            </th>
            <td>정보</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Origin;
