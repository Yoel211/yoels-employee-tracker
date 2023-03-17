INSERT INTO department (name)
VALUES ("Web Development"),
       ("Data Science"),
       ("Math"),
       ("Electives");


INSERT INTO roles (name, department)
VALUES ("Intro to JavaScript", 1),
       ("Data Science", 2),
       ("Linear Algebra"),
       ("History of the Internet", 1),
       ("Machine Learning", 3),
       ("Game Design", 1),
       ("Cloud Development", 1);

INSERT INTO employee (name,roles)
VALUES ("Jon",1),
       ("Brian",1),
       ("Yoel",2),
       ("Aachal",2),
       ("Avery",3),
       ("Enter name here",3),
       ("Cloud",4);