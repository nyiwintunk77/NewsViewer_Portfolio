import React from "react";
import "./SearchStyled.css";

const InputSearch = ({ namesearch, onSearch }) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      ></link>

      <input
        id="search"
        class="fas"
        type="text"
        placeholder="&#xF002; Search..."
        onChange={(e) => onSearch(e.target.value)}
        value={namesearch}
      />
    </div>
  );
};

export default InputSearch;
