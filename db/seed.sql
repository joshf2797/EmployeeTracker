INSERT INTO department (department_name)
VALUES ("Coach"),
       ("Player"),
       ("Training Staff"),
       ("Executive"),
       ("Owner");

INSERT INTO role (title, salary, department_id)
VALUES  ("Head Coach", 5000000, 1),
        ("Assistant Coach" 750000, 1),
        ("Point Guard", 28000000, 2),
        ("Shooting Guard", 33000000, 2),
        ("Center", 30000000, 2),
        ("Power Forward", 44000000, 2),
        ("Small Forward", 9000000, 2),
        ("Head Trainer", 500000, 3),
        ("Assistant Trainer", 150000, 3),
        ("General Manager", 5000000, 4),
        ("Assistant GM", 1000000, 4),
        ("Owner", "N/A", 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Monty", "Williams", 1, 4),
        ("Kevin", "Young", 1, 1),
        ("Chris", "Paul", 2, 1),
        ("Devin", "Booker", 2, 1),
        ("Deandre", "Ayton", 2, 1),
        ("Kevin", "Durant", 2, 1),
        ("Torrey", "Craig", 2, 1),
        ("David", "Crewe", )