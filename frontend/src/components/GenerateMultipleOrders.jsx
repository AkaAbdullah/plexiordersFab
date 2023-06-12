import { useNavigate } from "react-router-dom";

export const GenerateMultipleOrders = () => {
  const naviagate = useNavigate();
  return (
    <>
      <div onClick={() => naviagate("/generateorders")} className="boxButton">
        <h3>Generate</h3>
        <h4>Orders</h4>
      </div>
    </>
  );
};
