/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { veriAl } from "../Redux/EczaneSlice";

/* eslint-disable no-undef */
const Header = () => {
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value.toLowerCase();
    dispatch(veriAl(value))
  };

  return (
    <div className=" d-flex align-items-center justify-content-between ">
      <div className=" d-flex align-items-center">
        <img className=" p-1" width={80} src={"../public/pharmacy.svg"} />
        <h1 className=" mx-1 text-light nobetci ">Nöbetçi Eczaneler</h1>
      </div>
      <form onSubmit={handleSubmit} className=" d-flex me-3">
        <input type="text" className=" rounded-3 p-2" placeholder="Şehir Giriniz" />
        <button type="submit" className=" btn btn-warning m-1">
          ARA
        </button>
      </form>
    </div>
  );
};

export default Header;
