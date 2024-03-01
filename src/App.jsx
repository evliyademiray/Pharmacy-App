import { useSelector } from "react-redux";
import Card from "./Components/Card";
import Header from "./Components/Header";
const App = () => {
  const veri = useSelector((store) => store.EczaneSlice);
  const nihai = veri?.data?.data?.data;
  console.log(nihai);
  return (
    <div>
      <Header />
      <div className="cards">
        {nihai === undefined && <h1>Hoşgeldiniz</h1>}
        {nihai?.length === 0 && <h1>Sonuç Bulunamadı</h1>}
        {nihai?.length > 0 && (
          <h1>
            {nihai[0]?.city} için {nihai?.length} adet veri bulundu
          </h1>
        )}
        <Card />
      </div>
    </div>
  );
};

export default App;
