import React from "react";
import "./coming-soon.css";
function CommingSoon() {
  return (
    <div>
      <>
        <div className="animation-container">
          <div className="y-axis-container">
            <div className="container">
              <div className="flash" />
              <div className="coin side">
                <div className="shine" />
              </div>
              <div className="side-coin" />
              <div className="coin">
                <div className="dai">
                  <img src="assets/img/logo/coming-soon-m.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow" />
          <div
            className="money-text-loading"
            data-loading-text="LoadingMoney..."
          />
        </div>
        <h1 id="headline" class="headline">
          Coming <span class="soon-bg"> Soon </span>{" "}
        </h1>
        <div id="countdown" className="countdown">
          <ul>
            <li>
              <span id="days" />
              days
            </li>
            <li>
              <span id="hours" />
              Hours
            </li>
            <li>
              <span id="minutes" />
              Minutes
            </li>
            <li>
              <span id="seconds" />
              Seconds
            </li>
          </ul>
        </div>
      </>
    </div>
  );
}

export default CommingSoon;
