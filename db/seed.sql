INSERT INTO department (department_name)
VALUES ("Coach"),
       ("Player"),
       ("Trainer"),
       ("Executive");

INSERT INTO role (title, salary, department_id)
VALUES  ("Head Coach", 5000000, 1),
        ("Assistant Coach" 750000, 1),
        ("Point Guard", 15000000, 2),
        ("Shooting Guard", 25000000, 2),
        ("Center", 13500000, 2),
        ("Power Forward", 8000000, 2),
        ("Snall Forward", 9000000, 2),
        ("Head Trainer", 500000, 3),
        ("Assistant Trainer", 150000, 3),
        ("General Manager", 5000000, 4),
        ("Assistant GM", 1000000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ()