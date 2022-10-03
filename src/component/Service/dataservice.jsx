import axios from "axios";

const headerConfig = {
  headers: { 'x-access-token': localStorage.getItem('token') }
}
export const getbook = () => {
  let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', headerConfig)

  return response
}

export const addToCart = (id) => {
  let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`, id, headerConfig)

  return response
}

export const addToInfo = (id) => {
  let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id.cartItem_id}`, id, headerConfig)

  return response
}

export const getCard = () => {
  let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items/`, headerConfig)

  return response
}

export const removeCart = (obj) => {
  let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${obj.cartItem_id}`, headerConfig)

  return response
}

export const Cust_Details = (obj) => {
  let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`, obj,headerConfig)

  return response
}

export const wishList = (id) => {
  let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`, id, headerConfig)

  return response
}

export const getWishList = () => {
  let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items/`, headerConfig)

  return response
}

export const getOrder = (order) => {
  let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,order, headerConfig)

  return response
}


export const removeWish = (obj) => {
  let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${obj.product_id}`, headerConfig)

  return response
}