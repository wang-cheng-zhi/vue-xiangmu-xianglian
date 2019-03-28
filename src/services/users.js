import axios from '../utils/request'

//登录
export function login(userName, password) {
  return axios.post('/api/v1/auth/login',{
    userName,
    password
  })
}
//注册
export function reg(user) {
  return axios.post('/api/v1/auth/reg',user)
}
//添加购物车
export function addToShopCart(product, quantity) {
  let myCarts = getShopCart();
  const index = myCarts.findIndex(cart => cart.product == product)
  if(index > -1) {
    myCarts[index].quantity = myCart[index].quantity + quantity;
  } else {
    myCart.push({
      product,
      quantity,
    });
  }
  localStorage.setItem('my-shopcart',JSON.stringify(myCarts));
}
//从购物车中删除商品
export function delFromProduct(product) {
  let myCarts = getShopCart()
  const index = muCarts.findIndex(cart => cart.product == product)
  if(index > -1) {
    myCarts.splice(inex, 1)
  }
  localStorage.setItem('my-shopcart',JSON.stringify(myCarts));
}
export function getShopCart() {
  if(localStorage.getItem('my-shopcart')) {
    return JSON.parse(localStorage.getItem('my-shopcart'))
  } else {
    return []
  }
}

//获取购物车商品数量
export function getShopCartCount() {
  const myCart = getShopCart()
  let result = 0
  myCarts.forEach(item => result += item.quantity)
  return result
}











