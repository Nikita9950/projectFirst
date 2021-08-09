function Employee(name, phone, departmentId) {
  this._name = name
  this._phone = phone
  this._departmentId = departmentId
}

Employee.prototype.getName = function () {
  return this._name
}

Employee.prototype.setPhone = function (phone) {
  if (typeof phone === 'string') {
    this._phone = phone
  } else {
    console.warn('invalid data type')
  }

}

Employee.prototype.getDepartmentId = function () {
  return this._departmentId
}

Employee.prototype.setDepartmentId = function (departmentId) {
  if (typeof departmentId === 'number') {
    this._departmentId = departmentId
  } else {
    console.warn('invalid data type')
  }
}