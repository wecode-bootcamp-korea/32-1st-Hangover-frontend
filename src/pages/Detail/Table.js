import './Table.scss';

let key = 0;
const Table = () => {
  const dummy = [
    {
      name: '서윗함',
      range: 20,
    },
    {
      name: '짜릿함',
      range: 20,
    },
    {
      name: '씁쓸함',
      range: -20,
    },
    {
      name: '츼하노',
      range: 10,
    },
  ];

  return (
    <>
      {dummy.map(item => {
        const { name, range } = item;
        return (
          <div key={key++} className="tableContainer">
            <div className="tableName">{name}</div>
            <div className="tableRow">
              <div className="tableBar"></div>
              <span className="tableRange"></span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Table;
