import './App.css';

const displayEmojiName = e => alert(e.target.id);
const emojis = [
  {
    emoji: '😀',
    name: 'grinning face',
  },
  {
    emoji: '🎉',
    name: 'party popper',
  },
  {
    emoji: '💃',
    name: 'woman dancing',
  },
];

function App() {
  const greeting = 'greeting';

  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing JSX</p>
      <ul>
        {emojis.map(emoji => (
          <li key={emoji.name}>
            <button onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))}
        {/* <li>
          <button onClick={displayEmojiName}>
            <span role="img" aria-label="grinning face" id="grinning face">
              😀
            </span>
          </button>
        </li> */}
        {/* <li>
          <button onClick={displayEmojiName}>
            <span role="img" aria-label="party popper" id="party popper">
              🎉
            </span>
          </button>
        </li>
        <li>
          <button onClick={displayEmojiName}>
            <span role="img" aria-label="woman dancing" id="woman dancing">
              💃
            </span>
          </button>
        </li> */}
      </ul>
    </div>
  );
}

export default App;
