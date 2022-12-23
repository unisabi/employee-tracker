use tracker;

insert into department
    (name) 
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
    ('John','Doe',1,null),
    ('Betty','White',2,1),
    ('Douglus','Smith',3,1);