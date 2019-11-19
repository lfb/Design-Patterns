// class SingleObject {
//   static getInstance() {
//     if (!SingleObject.instance) {
//       SingleObject.instance = new SingleObject()
//     }
//     return SingleObject.instance
//   }
// }

function SingleObject() {
}

SingleObject.getInstance = (function () {
  var instance = null
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

var s1 = new SingleObject()
var s2 = new SingleObject()
console.log(s1 === s2) // false

var s3 = SingleObject.getInstance()
var s4 = SingleObject.getInstance()
console.log(s3 === s4) // true

