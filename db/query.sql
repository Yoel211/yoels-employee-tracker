SELECT department, COUNT(id) AS number_courses
FROM roles
GROUP BY department;