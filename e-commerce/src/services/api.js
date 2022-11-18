import axios from "axios";

export const api = axios.create({
  baseURL: "https://testfront.zlinkt.com",
})

export const getProdutos = async (quant) => {
  return api.get(`/?length=${quant}`);
}

export const getNextPage = async (next=0, categoria=null) => {
  if(categoria){
    return api.get(`/?index=${next}&category=${categoria}`);
  }
  return api.get(`/?index=${next}`);
}

export const getProdutosCategoria = async (categoria, quant=24) => {
  return api.get(`/?length=${quant}&category=${categoria}`);
}

export const findProduto = async (id) => {
  return api.get(`/${id}`);
}