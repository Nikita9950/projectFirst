function HeadOfDepartment(name, phone, department, position) {
  Employee.call(this, name, phone, department)
  this._position = position
}

HeadOfDepartment.prototype = Object.create(Employee.prototype)

HeadOfDepartment.prototype.constructor = HeadOfDepartment

HeadOfDepartment.prototype.getPosition = function () {
  return this._position
}

HeadOfDepartment.prototype.setPosition = function (position) {
  if (typeof position === 'string') {
    this._position = position
  }
}