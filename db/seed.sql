INSERT INTO departments (department_name)
VALUES ("Coach"),
       ("Player"),
       ("Training Staff"),
       ("Executive"),
       ("Owner");

INSERT INTO roles (title, salary, department_id)
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
        ("Owner", "N/A", 5);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Monty", "Williams", 1, 10),
        (2, "Kevin", "Young", 2, 1),
        (3, "Chris", "Paul", 3, 1),
        (4, "Devin", "Booker", 4, 1),
        (5, "Deandre", "Ayton", 5, 1),
        (6, "Kevin", "Durant", 6, 1),
        (7, "Torrey", "Craig", 7, 1),
        (8, "David", "Crewe", 8, 10),
        (9, "John", "Swift", 9, 8),
        (10, "James", "Jones", 10, 11),
        (11, "Mat", "Ishbia", 11, null);
