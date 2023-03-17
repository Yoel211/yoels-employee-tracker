INSERT INTO department (name)
VALUES ("Web Development"),
       ("Data Science"),
       ("Math"),
       ("Electives");


INSERT INTO roles (name, department_id)
VALUES ("Intro to JavaScript", 1),
       ("Data Science", 2),
       ("Linear Algebra"),
       ("History of the Internet", 1),
       ("Machine Learning", 3),
       ("Game Design", 1),
       ("Cloud Development", 1);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("Jon", "M" , 1, 10),
       ("Brian", "S" , 1 , 10),
       ("Yoel", "R" , 2 , 10),
       ("Aachal", "A" , 2),
       ("Avery", "L" , 3),
       ("Enter name here", "X" , 3),
       ("Cloud", "L" ,4);