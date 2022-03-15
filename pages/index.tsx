import React from 'react';

type State = {
  iframeX: number;
  iframeY: number;
};
class Home extends React.Component<never, State> {
  state: State = {
    iframeX: 0,
    iframeY: 0,
  };
  componentDidMount(): void {
    global.setInterval(this.onTick, 30);
  }
  render(): React.ReactNode {
    const {iframeX, iframeY} = this.state;

    return (
      <div>
        <iframe
          width="800"
          height="600"
          src="http://ncov.mohw.go.kr"
          style={{
            marginLeft: iframeX,
            marginTop: iframeY,
          }}
        />
      </div>
    );
  }
  private onTick = () => {
    const deltaX = 10 * (Math.random() - 0.5);
    const deltaY = 10 * (Math.random() - 0.5);

    this.setState({iframeX: this.state.iframeX + deltaX, iframeY: this.state.iframeY + deltaY});
  };
}

export default Home;
