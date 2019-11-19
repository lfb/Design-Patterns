class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }

  getItem(key) {
    return localStorage.getItem(key)
  }

  setItem(key, val) {
    return localStorage.setItem(key, val)
  }
}

// function StorageBase() {
// }
//
// StorageBase.prototype.getItem = function (key) {
//   return localStorage.getItem(key)
// }
// StorageBase.prototype.setItem = function (key, val) {
//   return localStorage.setItem(key, val)
// }
//
// var Storage = (function () {
//   var instance = null
//   return function () {
//     if (!instance) {
//       return new StorageBase()
//     }
//     return instance
//   }
// })()

var storage1 = new Storage()
var storage2 = new Storage()

storage1.setItem('name', 'bobo')
storage1.getItem('name') // 'bobo'
storage2.getItem('name') // 'bobo'

