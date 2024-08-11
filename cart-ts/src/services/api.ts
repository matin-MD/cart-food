import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:9001",
});

export async function getProducts() {
  const { data } = await client("/products");
  return data;
}
