import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"¡Bienvenida/o a Terra Florens!"} />
    </div>
  );
}

export default App;
