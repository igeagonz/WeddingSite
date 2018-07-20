import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Boda de Fer y Nacho</h1>
                <p className="lead"> Acompañanos a nuestra boda!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
