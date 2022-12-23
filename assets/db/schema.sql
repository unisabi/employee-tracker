DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;

USE tracker;

CREATE TABLE department (

   id  INT UNSIGNED AUTO_INCREMENT primary key,
   name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id  INT UNSIGNED AUTO_INCREMENT primary key,
    title  VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    index  deb_ind (department_id),
    constraint fk_department foreign key (department_id) references department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT primary key,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    index role_ind (role_id),
    constraint fk_role foreign key (role_id) references role(id) ON DELETE CASCADE,
    manager_id INT UNSIGNED,
    index man_ind (manager_id),
    constraint fk_manager foreign key (manager_id) references employee(id) ON DELETE SET NULL
)