import { accessInstance } from "../axios-api";

const postOrderList = async (orderData) => {
  const res = await accessInstance.post("/order", orderData);
  return res.data;
};

export default postOrderList;
