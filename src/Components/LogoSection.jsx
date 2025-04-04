import React from 'react';
import ReactLogo from "/react.svg";

export default function LogoSection() {
  return (
    <div className="logo-section">
        <img src={ReactLogo} alt="react" width="100px" />
        <h1>THE REACT QUIZ</h1>
    </div>
  )
}
