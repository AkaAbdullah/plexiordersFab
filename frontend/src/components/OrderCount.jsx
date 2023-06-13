import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function OrderCount() {
  const [count, setCount] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://hilarious-pantsuit-elk.cyclic.app/api/orders/")
      .then((data) => data.json())
      .then((result) => setCount(result));
    setLoader(false);
  }, []);

  const naviagate = useNavigate();

  return (
    <>
      <div onClick={() => naviagate("/allorders")} className="boxButton">
        <h3>View all Orders</h3>
        <h1>
          {loader ? <InfinitySpin width="200" color="#4fa94d" /> : count.length}
        </h1>
      </div>
    </>
  );
}
