import {saveItem, getItem, removeItem} from '../utils/LocalStorageService'

export const UserService = {
  token: '',
  jwt: '' ,
  jwtExpire: 0,
  setJwt : function (jwt: string){
    this.jwt = jwt;
  },
  getJwt : function (){
    return this.jwt;
  }, 
  getJwtExpire() {
    return this.jwtExpire;
  },
  setJwtExpire : function (jwtExpire: number){
    this.jwtExpire = jwtExpire;
  },
  setJwtToLocalStorage : function (token: string, jwtExpire: number) {
    const data = {
      token,
      jwtExpire
    }

    return saveItem('token', data)
  },
  getJwtFromLocalStorage : function (){
    return getItem('token')
  },
  removeJwtFromLocalStorage : function (){
    return removeItem('token')
  }
}