import './Table.scss';

let key = 0;
const Table = () => {
  const dummy = [
    {
      name: '서윗함',
      range: 15,
    },
    {
      name: '짜릿함',
      range: 5,
    },
    {
      name: '씁쓸함',
      range: 40,
    },
    {
      name: '츼하노',
      range: 30,
    },
  ];

  return (
    <>
      {dummy.map(item => {
        const { name, range } = item;
        console.log(range);
        return (
          <div key={key++} className="tableContainer">
            <div className="tableName">{name}</div>
            <div className="tableRow">
              <div className="tableBar"></div>
              <span
                className="tableRange"
                style={{ left: `${item.range}%` }}
              ></span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Table;
