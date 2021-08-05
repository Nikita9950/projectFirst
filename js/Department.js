function Department(id, address, officeRent) {
  this._id = id
  this._address = address
  this._officeRent = officeRent
}

Department.prototype.getAddress = function () {
  return this._address
}


Department.prototype.setAddressAsync = function (address) {
  setTimeout(function () {
    if (this._officeRent) {
      this._address = address
    } else {
      console.warn('You cannot change the address.')
    }
  }.bind(this), 2000)
}