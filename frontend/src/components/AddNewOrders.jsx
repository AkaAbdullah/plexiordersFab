import { useNavigate } from "react-router-dom";

export const AddNewOrders = () => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate("/addneworders")} className="boxButton">
        <h3>Add new Orders</h3>
        <h1>+</h1>
      </div>
    </>
  );
};
