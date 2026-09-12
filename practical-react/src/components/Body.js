// React 17 automatically transforms JSX without using React.createElement

export default props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myFunc(1, 2)}</p>
  </div>
);

export const Body2 = () => (
  <div>
    <div>Hi</div>
  </div>
);

export const Body3 = () => (
  <div>
    <div>Hi</div>
  </div>
);
