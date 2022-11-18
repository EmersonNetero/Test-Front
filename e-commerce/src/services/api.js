import axios from "axios";

export const api = axios.create({
  baseURL: "https://testfront.zlinkt.com",
})

export const getProdutos = async (quant) => {
  return api.get(`/?length=${quant}`);
}

export const getTodosProdutos = async (next=0) => {
  return api.get(`/?index=${next}`);
}

export const getProdutosCategoria = async (categoria, quant=24) => {
  return api.get(`/?length=${quant}&category=${categoria}`);
}