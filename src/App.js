import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./Data";
import "./App.css";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);

  const allCategory = ["الكل", ...new Set(items.map((item) => item.category))];

  const filterByCategory = (category) => {
    if (category === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === category);
      setItemsData(newArr);
    }
  };

  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category
          allCategory={allCategory}
          filterByCategory={filterByCategory}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
