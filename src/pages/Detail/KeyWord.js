import './KeyWord.scss';

const KEY_WORD = [
  {
    id: 1,
    content: '소주',
  },
  {
    id: 2,
    content: '한국',
  },
];

const KeyWord = () => {
  return (
    <div className="detailKey">
      {KEY_WORD.map(keyItems => (
        <>
          <span className="keyContent" key={keyItems.id}>
            <a>{keyItems.content}</a>
          </span>
          {keyItems.content && <span className="detailDot">·</span>}
        </>
      ))}
    </div>
  );
};

export default KeyWord;
