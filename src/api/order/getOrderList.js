import { accessInstance } from "../axios-api";

const getOrderList = async () => {
  const res = await accessInstance.get("/order");
  return res.data;
};

export default getOrderList;
