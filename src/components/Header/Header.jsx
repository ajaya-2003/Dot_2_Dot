import React from 'react'

function Header() {
  return (
    <div style={{width:'100%', display:'flex',flexDirection:'column'}} >
      <h1 className="text-center cool-heading">
          <span style={{ color: "blue", textDecoration: "underline" }}>
            DOT
          </span>
          <span style={{ color: "black", textDecoration: "underline" }}>
            {" "}
            2{" "}
          </span>
          <span style={{ color: "red", textDecoration: "underline" }}>DOT</span>
        </h1>
        <div className="container">
          <div className="centered-content">
            <h2 className="text-center event-title">EVENTS</h2>
            <span style={{ fontSize: "16px", marginLeft: "10px" }}>
              -Connects Your Dream TO Reality
            </span>
          </div>
        </div>
    </div>
  )
}

export default Header
