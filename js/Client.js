function Client(name, employee) {
  this._name = name
  this._employee = employee
}

Client.prototype.getName = function () {
  return this._name
}

Client.prototype.getEmployee = function () {
  return this._employee
}

Client.prototype.setEmployee = function (employee) {
  if (employee instanceof Employee) {
    this._employee = employee
  } else {
    console.warn('Invalid data type')
  }

}