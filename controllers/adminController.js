const db = require("../connection")

const getDeviceAll = (req, res) => {
     const sql = "SELECT users.username, users.email, devices.device_name FROM devices INNER JOIN users ON devices.user_id = users.id"
     try {
          db.query(sql, (err, fields) => {
               if (err) throw err
               res.status(200).json(fields)
          })
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

module.exports = {
     getDeviceAll
}