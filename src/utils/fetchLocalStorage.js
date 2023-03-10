export const FetchUser = () =>{
    const userInfo = localStorage.getItem("user-profile") !== "undefined" ?
    JSON.parse(localStorage.getItem("user-profile")):localStorage.clear()

    return userInfo
}

export const FetchCart = () =>{
    const cartInfo = localStorage.getItem("cartItems") !== "undefined" ?
    JSON.parse(localStorage.getItem("cartItems")):localStorage.clear()

    return cartInfo ? cartInfo : []
} 