//对所有的API进行统一管理
import requests from './request';
import mockRequests from './mockAjax'

//三级联动接口
// /product/getBaseCategoryList    get

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
    //发请求  axios返回的结果是Promise对象

//获取banner （home首页轮播图接口）
export const reqGetBannerList = ()=>mockRequests.get('/banner')
//
export const reqGetFloorList = ()=>mockRequests.get('/floors')


//获取搜索页面的相应信息  传递参数至少是个空对象
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params})

//获取产品详情信息的接口
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'})

//将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'}) 

// 获取购物车列表数据接口  URL:/api/cart/cartList     method:get
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})

//删除购物车产品的接口
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:"delete"})

//修改商品的选中状态  //url:/api/cart/checkCart/{skuId}/{isChecked} method:get
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`})

// 获取验证码的接口  //   URL:/api/user/passport/sendCode/{phone}    get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

// 注册用户接口   //   URL:/api/user/passport/register  phone  code password
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'})

// 用户登录接口  //URL:/api/user/passport/login method:post  phone password
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'})

// 获取用户信息  //URL:/api/user/passport/auth/getUserInfo method:get
export const reqUserInfo = ()=>requests({url:'user/passport/auth/getUserInfo',method:'get'})

//退出登录   
export const reqLoginOut = ()=>requests({url:'/user/passport/logout',method:'get'})

// 获取用户地址信息
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

// 获取订单交易页信息
export const reqOrderInfo = ()=>requests({url:'order/auth/trade',method:'get'})

// 提交订单接口
export const requSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})