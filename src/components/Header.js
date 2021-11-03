import React from "react";

function Header ({onDarkModeClick, darkOrLight}) {
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {{darkOrLight} ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header