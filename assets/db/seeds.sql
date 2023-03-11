use tracker;

insert into department
    (tracker) 
values
    ('HR'),
    ('Sales'),
    ('Engineering');

insert into role
    (title,salary,department_id)
values
    ('manager',80000,1),
    ('sales rep', 60000,2),
    ('engineer', 70000,3);

insert into employee
    (first_name,last_name,role_id,manager_id)
values
    ('John','Doe',1,1),
    ('Betty','White',2,1),
    ('Douglus','Smith',3,1),
    ('Micah', 'Henley'4,4),
    ('Daniel', 'Jacobs'5,5),
    ('Chole', 'Clover'6,6),
    ('Susan', 'Sherri'7,7),
    ('Rick', 'Rift' 8,8);