SBA 308: JavaScript Fundamentals

To manipulate the data inside the CourseInfo object, AssignmentGroup object, and LearnerSubmissions array I used different loops such as forEach and for loop.
For some data, I manipulated the items in the arrays/properties in the objects and initialized them in let variables or constants.

I created a custom error to throw an error when assignmentgroup.course_id does not belong to its course. I defined a code block to be tested for errors while executing it for two situations: when points_possible is 0 and when the expected value is a string instead of a number. The errors will execute if the condition is false which means the value of points needs to be 0 to activate the error, and the value is a number instead of a string.

I created three functions to handle repeated tasks.
The function findAvg calculates the weighted average for every learner based on the arguments she receives.
The function findScore calculates the percentage obtained by the student relative to the maximum possible points.
I created a new constant named score_latePenalty to deduct 10% of the total points possible from the score of the learner if the assignment was submitted after the due date.
The function createObjects takes two parameters, keys, and values, and creates an object by iterating over the keys array. For each key, it assigns the corresponding value from the values array. After the object is returned, I created two objects (obj1 and obj2) using the createObject function. 
In the end, I declared an empty array and used the pushed method to add obj1 and ob2 to the array.