/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage/dist/react-fullpage-commonjs";

class FullpageWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  onLeave() {
    console.log('on leave', arguments);
  }

  render() {
    return (
      <ReactFullpage
        onLeave={this.onLeave.bind(this)}
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <h3>Section 1</h3>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Move down
                </button>
              </div>
              <div className="section">
                <div className="slide">
                  <h3>Slide 2.1</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
              <div className="section">
                <h3>Section 3</h3>
              </div>
            </div>
          );
        }}
      />
    );
  }
};

export default FullpageWrapper;
