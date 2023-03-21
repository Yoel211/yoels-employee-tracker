INSERT INTO department (name)
VALUES ("Web Development"),
       ("Data Science"),
       ("Math"),
       ("Electives");


INSERT INTO roles (id, title , salary,  department_id)
VALUES (1, "Intro to JavaScript", 10, 2),
       (2, "Data Science", 20, 1),
       (3, "Linear Algebra", 30, 1),
       (4, "History of the Internet", 40, 1),
       (5, "Machine Learning", 50, 3),
       (6, "Game Design", 60, 1),
       (7, "Cloud Development", 70,1);

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES (1, "Jon", "M" , 1, "Manager"),
       (1, "Brian", "S" , 1 , "Manager"),
       (2, "Yoel", "R" , 2 , "Manager"),
       (1, "Aachal", "A" , 2),
       (3, "Avery", "L" , 3),
       (5, "Enter name here", "X" , 3),
       (6, "Cloud", "L" ,4);