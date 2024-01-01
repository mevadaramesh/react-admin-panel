
function setStorageItem(key,value){
  
  localStorage.setItem(key, JSON.stringify(value));
  
}


function getStorageItem(key){
 return JSON.parse(localStorage.getItem(key));
}
function removeStorageItem(key){
  localStorage.removeItem(key);
}

export {
  setStorageItem,
  getStorageItem,
  removeStorageItem
}