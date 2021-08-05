function Company(name, openingHours) {
  this._name = name
  this._openingHours = openingHours
  this._departments = []
  this._employees = []
}

Company.prototype.getName = function () {
  return this._name
}

Company.prototype.setOpeningHours = function (openingHours) {
  if (typeof openingHours === 'string') {
    this._openingHours = openingHours
  } else {
    return new Error('invalid data type')
  }
}

Company.prototype.getDepartments = function () {
  if (this._departments.length === 0) {
    return new Error('no departments')
  } else {
    return this._departments
  }
}


Company.prototype.getEmployees = function () {
  if (this._employees.length === 0) {
    return new Error('no employees')
  } else {
    return this._employees
  }

}

Company.prototype.addDepartment = function (departments) {
  if (departments instanceof Object) {
    this._departments.push(departments)
  } else {
    return new Error('invalid data type')
  }
}

Company.prototype.addEmployees = function (empoloyee) {
  if (empoloyee instanceof Object) {
    this._employees.push(empoloyee)
  } else {
    return new Error('invalid data type')
  }

}

Company.prototype.removeDepartmentById = function (id) {
  if (typeof id === 'number') {
    for (i = 0; i < this._departments.length; i++) {
      if (this._departments[i]._id === id) {
        this._departments.splice(i, 1)
      }
    }
  } else {
    return new Error('invalid data type')
  }
}

Company.prototype.removeEmployeeByName = function (name) {
  if (typeof name === 'string') {
    for (i = 0; i < this._employees.length; i++) {
      if (this._employees[i]._name === name) {
        this._employees.splice(i, 1)
      }
    }
  } else {
    return new Error('invalid data type')
  }
}


Company.prototype.getEmployeesByDepartment = function (departmentId) {
  if (typeof departmentId === 'number') {
    return this._employees.filter(function (elem) {
      return elem._department === departmentId
    })
  } else {
    return new Error('invalid data type')
  }
}