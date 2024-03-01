/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useSelector } from "react-redux";

const Card = () => {
  const veri = useSelector((store) => store.EczaneSlice);
  const nihai = veri?.data?.data?.data;
  console.log(nihai);
  return (
    <div className=" d-flex flex-wrap justify-content-center ">
      {nihai?.map((i, index) => (
        <div key={index} className="kart">
          <div>
            <img width={100} src={"../../public/arti.svg"} alt="" />
          </div>
          <div>
            <div className=" fw-bold">{i?.pharmacyName}</div>
            <div>
              <span className=" fw-bold">Adres:</span> {i?.address}
            </div>
            {i?.directions && (
              <div>
                <span className=" fw-bold">Tarif:</span> {i.directions}
              </div>
            )}
            <div>
              <span className=" fw-bold">Tel:</span> {i.phone}
            </div>
            <div>
              <span className=" fw-bold">İl:</span> {i.city}
            </div>
            <div>
              <span className=" fw-bold">İlçe:</span> {i.district}
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
