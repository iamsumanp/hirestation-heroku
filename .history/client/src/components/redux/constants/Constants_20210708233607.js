//to get all the services

export const FETCH_SERVICES = "FETCH_SERVICES";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

//to get specific service details

export const FETCH_SERVICE_DETAILS = "FETCH_SERVICE_DETAILS";
export const FETCH_SERVICE_DETAILS_SUCCESS = "FETCH_SERVICE_DETAILS_SUCCESS";
export const FETCH_SERVICE_DETAILS_ERROR = "FETCH_SERVICE_DETAILS_ERROR";
export const FETCH_SERVICE_DETAILS_RESET_ERROR =
  "FETCH_SERVICE_DETAILS_RESET_ERROR";

// LOGIN CONSTANTS

export const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_ERROR = "FETCH_LOGIN_ERROR";

//Registration constants

export const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
export const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
export const FETCH_REGISER_ERROR = "FETCH_REGISER_ERROR";

//Load User constants

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_ERROR = "LOAD_USER_ERROR";

//Logout user constants

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

//get User services

export const USER_SERVICES_REQUEST = "USER_SERVICES_REQUEST";
export const USER_SERVICES_SUCCESS = "USER_SERVICES_SUCCESS";
export const USER_SERVICES_ERROR = "USER_SERVICES_ERROR";

//updating the user profile avatar,bio,name and email

export const USER_PROFILE_UPDATE_REQUEST = "USER_PROFILE_UPDATE_REQUEST";
export const USER_PROFILE_UPDATE_SUCCESS = "USER_PROFILE_UPDATE_SUCCESS";
export const USER_PROFILE_UPDATE_ERROR = "USER_PROFILE_UPDATE_ERROR";
export const USER_PROFILE_UPDATE_RESET = "USER_PROFILE_UPDATE_RESET";

//udpate password

export const PASSWORD_UDPATE_REQUEST = "PASSWORD_UDPATE_REQUEST";
export const PASSWORD_UPDATE_SUCCESS = "PASSWORD_UDPATE_SUCCESS";
export const PASSWORD_UPDATE_ERROR = "PASSWORD_UPDATE_ERROR";
export const PASSWORD_UDPATE_RESET = "PASSWORD_UDPATE_RESET";

//forgot password(sending mail to the backend and letting user know)

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const FORGOT_PASSWORD_SUCCESS_RESET = "FORGOT_PASSWORD_SUCCESS_RESET";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

//reset password
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

//get cart items constants

export const CART_ITEMS_REQUEST = "CART_ITEMS_REQUEST";
export const CART_ITEMS_SUCCESS = "CART_ITEMS_SUCCESS";
export const CART_ITEMS_ERROR = "CART_ITEMS_ERROR";

//cart constants

export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_ERROR = "ADD_TO_CART_ERROR";
export const ADD_TO_CART_ISADDED_RESET = "ADD_TO_CART_ISADDED_RESET";

//delete cart Items

export const DELETE_CART_ITEMS_REQUEST = "DELETE_CART_ITEMS_REQUEST";
export const DELETE_CART_ITEMS_SUCCESS = "DELETE_CART_ITEMS_SUCCESS";
export const DELETE_CART_ITEMS_ERROR = "DELETE_CART_ITEMS_ERROR";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

//save Order info(LocalStorage)

export const SAVE_ORDER_INFO = "SAVE_SHIPPING_INFO";
export const GET_ORDER_INFO_SESSION_STORAGE = "GET_ORDER_INFO_SESSION_STORAGE";

//save item order in sessionstorage

export const SAVE_ITEM_SESSION_STORAGE = "SAVE_ITEM_SESSION_STORAGE";
export const GET_ITEM_SESSION_STORAGE = "GET_ITEM_SESSION_STORAGE";

//create new order

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL";
export const CLEAR_ORDER_ERROR = "CLEAR_ORDER_ERROR";

//get the user orders

export const GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST";
export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_FAIL = "GET_ORDERS_FAIL";

//order details

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";

//new service review

export const NEW_REVIEW_REQUEST = "NEW_REVIEW_REQUEST";
export const NEW_REVIEW_SUCCESS = "NEW_REVIEW_SUCCESS";
export const NEW_REVIEW_RESET = "NEW_REVIEW_RESET";
export const NEW_REVIEW_FAIL = "NEW_REVIEW_FAIL";

//new service

export const NEW_SERVICE_REQUEST = "NEW_SERVICE_REQUEST";
export const NEW_SERVICE_SUCCESS = "NEW_SERVICE_SUCCESS";
export const NEW_SERVICE_FAIL = "NEW_SERVICE_FAIL";
export const NEW_SERVICE_RESET = "NEW_SERVICE_RESET ";
export const NEW_SERVICE_FAIL_RESET = "NEW_SERVICE_FAIL_RESET";

//deleting the service

export const DELETE_SERVICE_REQUEST = "DELETE_SERVICE_REQUEST";
export const DELETE_SERVICE_SUCCESS = "DELETE_SERVICE_SUCCESS";
export const DELETE_SERVICE_FAIL = "DELETE_SERVICE_FAIL";
export const DELETE_SERVICE_RESET = "DELETE_SERVICE_RESET";
export const DELETE_SERVICE_CLEAR_ERROR = "DELETE_SERVICE_CLEAR_ERROR";

//updating the  service

export const UPDATE_SERVICE_REQUEST = "UPDATE_SERVICE_REQUEST";
export const UPDATE_SERVICE_SUCCESS = "UPDATE_SERVICE_SUCCESS";
export const UPDATE_SERVICE_FAIL = "UPDATE_SERVICE_FAIL";
export const UPDATE_SERVICE_RESET = "UPDATE_SERVICE_RESET";
export const UPDATE_SERVICE_CLEAR_ERROR = "UPDATE_SERVICE_CLEAR_ERROR";

//get admin orders

export const GET_ADMIN_ORDERS_REQUEST = "GET_ADMIN_ORDERS_REQUEST";
export const GET_ADMIN_ORDERS_SUCCESS = "GET_ADMIN_ORDERS_SUCCESS";
export const GET_ADMIN_ORDERS_ERROR = "GET_ADMIN_ORDERS_ERROR";
export const GET_ADMIN_ORDERS_CLEAR_ERRORS = "GET_ADMIN_ORDERS_CLEAR_ERRORS";

//update Order Status
export const UPDATE_ORDER_REQUEST = "UPDATE_ORDER_REQUEST";
export const UPDATE_ORDER_SUCCESS = "UPDATE_ORDER_SUCCESS";
export const UPDATE_ORDER_FAIL = "UPDATE_ORDER_FAIL";
export const UPDATE_ORDER_RESET = "UPDATE_ORDER_RESET";
export const UPDATE_ORDER_CLEAR_ERROR = "UPDATE_ORDER_CLEAR_ERROR";

//get specific user details
export const GET_USER_DETAILS_REQUEST = "GET_USER_DETAILS_REQUEST";
export const GET_USER_DETAILS_SUCCESS = "GET_USER_DETAILS_SUCCESS";
export const GET_USER_DETAILS_FAIL = "GET_USER_DETAILS_FAIL";
export const GET_USER_DETAILS_CLEAR_ERROR = "GET_USER_DETAILS_CLEAR_ERROR ";

//cloudinary (avatar)

// export const AVATAR_REQUEST = "AVATAR_REQUEST";
// export const AVATAR_SUCCESS = "AVATAR_SUCCESS";
// export const AVATAR_ERROR = "AVATAR_ERROR";
