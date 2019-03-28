export function loginIn(token) {
  sessionStorage.setItem('token',token)
}
export function isLogined() {
  if(sessionStorage.getItem('token')) {
    return true
  }else{
    return false
  }
}
export function logOut() {
  sessionStorage.removeItem('token')
}

