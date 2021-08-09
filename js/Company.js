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
    console.warn('invalid data type')
  }
}

Company.prototype.getDepartments = function () {
  if (this._departments.length === 0) {
    console.warn('no departments')
  } else {
    return this._departments
  }
}


Company.prototype.getEmployees = function () {
  if (this._employees.length === 0) {
    console.warn('no employees')
  } else {
    return this._employees
  }

}

Company.prototype.addDepartment = function (department) {
  if (department instanceof Department) {
    this._departments.push(department)
  } else {
    console.warn('invalid data type')
  }
}

Company.prototype.addEmployee = function (empoloyee) {
  if (empoloyee instanceof Employee) {
    this._employees.push(empoloyee)
  } else {
    console.warn('invalid data type')
  }

}

Company.prototype.removeDepartmentById = function (id) {
  if (typeof id === 'number') {
    for (i = 0; i < this._departments.length; i++) {
      if (this._departments[i].getId() === id) {
        this._departments.splice(i, 1)
      }
    }
  } else {
    console.warn('invalid data type')
  }
}

Company.prototype.removeEmployeeByName = function (name) {
  if (typeof name === 'string') {
    for (i = 0; i < this._employees.length; i++) {
      if (this._employees[i].getName() === name) {
        this._employees.splice(i, 1)
      }
    }
  } else {
    console.warn('invalid data type')
  }
}


Company.prototype.getEmployeesByDepartment = function (departmentId) {
  if (typeof departmentId === 'number') {
    return this.getEmployees().filter(function (elem) {
      return elem.getDepartmentId() === departmentId
    })
  } else {
    return new Error('invalid data type')
  }
}