import "./App.css";
import React, { useCallback, useState } from "react";
import Categories from "./component/Categories";
import NewsList from "./component/NewsList";
import InputSearch from "./component/InputSearch";

const App = () => {
  const [namesearch, setNameSearch] = useState("");
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  const onSearch = useCallback((search) => setNameSearch(search), []);

  return (
    <div>
      <div className="title">
        <Categories category={category} onSelect={onSelect} />
        <InputSearch namesearch={namesearch} onSearch={onSearch} />
      </div>
      <NewsList category={category} namesearch={namesearch} />
    </div>
  );
};

export default App;
