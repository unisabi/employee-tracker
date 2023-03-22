use trackerTable;

insert into department
    (name) 
values
    ('Sales'),
    ('Engineering'),
    ('Fiance'),
    ('Legal');

insert into role
    (title,salary,department_id)
values
    ('Sales Lead', 1000000, 1),
    ('Salesperson',80000, 1),
    ('Lead Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

insert into employee
    (first_name,last_name,role_id,manager_id)
values
    ('John','Doe', 1, NULL),
    ('Betty','White', 2, NULL),
    ('Douglus','Smith', 3, NULL),
    ('Micah', 'Henley', 4, NULL),
    ('Daniel', 'Jacobs', 5, NULL),
    ('Chole', 'Clover', 6, NULL),
    ('Susan', 'Sherri', 7, NULL),
    ('Rick', 'Rift', 5, NULL);