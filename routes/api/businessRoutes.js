const router = require("express").Router();
const Employee = require("../../models/Employee");
const Role = require("../../models/Role");
const Department = require("../../models/Department");
const inquirer = require("inquirer");
const cTable = require("console.table");
const connection = require("../../config/connection");
require("dotenv").config();

router.get("/employees", (req, res) => {
  console.log(
    Employee.findAll().then((employeeData) => {
      res.json(employeeData);
    })
  );
});

router.get("/roles", async (req, res) => {
  try {
    const roleData = await Role.findAll();
    roleData.forEach((role) => console.log(role[0][0]));
    console.log(roleData);
    res.json(roleData);
  } catch (err) {
    console.log(err);
  }
});

router.get("/departments", (req, res) => {
  Department.findAll().then((departmentData) => {
    res.json(departmentData);
    departmentData.forEach((element) => {
      console.table(element);
    });
  });
});

router.post("/seed", (req, res) => {
  // create some employee data
  Employee.bulkCreate([
    { first_name: "Mark", last_name: "Twain", role_id: 2, manager_id: 1 },
    { first_name: "John", last_name: "Liles", role_id: 1, manager_id: 2 },
    { first_name: "Kyle", last_name: "Milker", role_id: 3 },
    { first_name: "Jack", last_name: "Feld", manager_id: 3 },
  ])
    .then(() => {
      console.log("Employee table seeded!");
    })
    .catch((err) => {
      console.log(err);
    });

  //create some role data
  Role.bulkCreate([
    {
      title: "Junior Employee",
      salary: 69696,
      department_id: 2,
      manager_id: 1,
    },
    {
      title: "Senior Employee",
      salary: 100000,
      department_id: 1,
      manager_id: 3,
    },
    {
      title: "CTO",
      salary: 200000,
      department_id: 2,
    },
    {
      title: "CEO",
      salary: 69696,
      department_id: 3,
      manager_id: 2,
    },
  ])
    .then(() => {
      console.log("Role table seeded!");
    })
    .catch((err) => {
      console.log(err);
    });

  //create some department data
  Department.bulkCreate([
    {
      name: "Sales",
    },
    {
      name: "Technology",
    },
    {
      name: "Management",
    },
  ])
    .then(() => {
      console.log("Department table seeded!");
      res.json("Data Seeded");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
