const employees = require()
let employeeCounter = employees.length;

const getEmployees = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeesById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = "SELECT ?? FROM ?? where ?? = ? "

  const replacements = [
    '*',
    'employees',
    'employees.id',
    req.params.id,
  ]
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    if(rows.length < 1) {
      return res.status(404).send('Employee not found');
    }
    return res.json(rows[0]);  
  })
}

   
const getEmployeesByFirstName = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = "SELECT ?? FROM ?? where ?? = ? "
  const replacements = [
    '*',
    'employees',
    'employees.first_name',
    req.params.first_name
  ]
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, replacements)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

  const handleSQLError = (res, err) => {
    console.log('SQL Error: ', err)
    return res.status(500).send('An unexpected error occurred');
  }

   module.exports = {getEmployees, getEmployeesById, getEmployeesByFirstName};