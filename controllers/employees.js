const mysql = require('mysql')
const pool = require('../sql/connection')


const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};

const getEmployeesById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let sql = 'SELECT * FROM ?? WHERE ?? = ? LIMIT 100';
  const replacements = ['employees', 'emp_no', req.params.emp_no]
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
  let sql = 'SELECT * FROM ?? WHERE ?? = ? LIMIT 100';
  const replacements = ['employees', 'first_name', req.params.first_name]
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

   module.exports = {getEmployees, getEmployeesById, getEmployeesByFirstName}