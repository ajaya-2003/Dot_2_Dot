import React from "react";

function Header() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems:'center' }}>
      <label className="cool-heading">
        <span style={{ color: "blue", textDecoration: "underline" }}>DOT</span>
        <span style={{ color: "black", textDecoration: "underline" }}> 2 </span>
        <span style={{ color: "red", textDecoration: "underline" }}>DOT</span>
      </label>
      <div className="container">
          <label className="event-title">EVENTS</label>
          <span style={{ fontSize: "16px", marginLeft: "10px" }}>
            -Connects Your Dream TO Reality
          </span>
      </div>
    </div>
  );
}

export default Header;
