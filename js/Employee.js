function Employee(name, phone, department) {
  this._name = name
  this._phone = phone
  this._department = department
}

Employee.prototype.getName = function () {
  return this._name
}

Employee.prototype.setPhone = function (phone) {
  if (typeof phone === 'string') {
    this._phone = phone
  } else {
    return new Error('invalid data type')
  }

}

Employee.prototype.getDepartment = function () {
  return this._department
}

Employee.prototype.setDepartment = function (department) {
  if (typeof department === 'string') {
    this._department = department
  }
}