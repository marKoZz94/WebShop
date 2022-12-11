
export const saveItem = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string) => {
  const data = localStorage.getItem(key);
  if(data) {
    return JSON.parse(data);
  }
  return  null;
}

export const removeItem = (key: string) => {
  return localStorage.removeItem(key)
}
