const router = require("express").Router();
const Employee = require("../../models/Employee");
const Role = require("../../models/Role");
const Department = require("../../models/Department");
const inquirer = require("inquirer");

router.get("/employees", (req, res) => {
  Employee.findAll().then((employeeData) => {
    console.table(res.json(employeeData));
    res.json(employeeData);
  });
});

router.get("/roles", (req, res) => {
  Role.findAll().then((roleData) => {
    res.json(roleData);
    console.table(roleData);
  });
});

router.get("/departments", (req, res) => {
  Department.findAll().then((roleData) => {
    res.json(roleData);
    console.table(roleData);
  });
});

const getAll = () => {
  router.get("/", async (req, res) => {
    Employee.findAll().then((employeeData) => {
      console.table(employeeData);
    });
  });
};

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

//seed route to add a bunch of data to test with
const seed = () => {
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
        res.json("Employee seeding complete");
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
        res.json("Role seeding complete");
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
        res.json("Department seeding complete");
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports = router;
