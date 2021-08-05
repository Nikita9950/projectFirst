var myCompany = new Company('My Company', '9:00 - 18:00')



var officeNumberOne = new Department(1, 'Ukraine, Kharkiv, Tankopiya st.', true)

myCompany.addDepartment(officeNumberOne)

var officeNumberTwo = new Department(2, 'Ukraine, Kiyv, Hreshatik st.', false)

myCompany.addDepartment(officeNumberTwo)



var alex = new Employee('Alex', '0661234567', 1)

myCompany.addEmployees(alex)

var vasya = new Employee('Vasya', '0671234567', 1)

myCompany.addEmployees(vasya)

var petya = new Employee('Petya', '0681234567', 2)

myCompany.addEmployees(petya)

var danil = new Employee('Danil', '0931234567', 2)

myCompany.addEmployees(danil)



var david = new HeadOfDepartment('David', '0501234567', 1, 'manager')



var firstClient = new Client('Jack', alex)