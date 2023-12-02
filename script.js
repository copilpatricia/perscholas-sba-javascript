const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  console.log("=======Info for AssignmentGroup======");
  console.log("=======id's======");

  const id1 = ag.assignments[0].id;
  console.log(id1);
  const id2 = ag.assignments[1].id;
  console.log(id2);
  const id3 = ag.assignments[2].id;
  console.log(id3);

  console.log("=======due_at dates======");

  const due_at_1 = ag.assignments[0].due_at;
  console.log(due_at_1);
  const due_at_2 = ag.assignments[1].due_at;
  console.log(due_at_2);
  const due_at_3 = ag.assignments[2].due_at;
  console.log(due_at_3);

  console.log("=======points_possible======");

  const points_possible_1 = ag.assignments[0].points_possible;
  console.log(points_possible_1);
  const points_possible_2 = ag.assignments[1].points_possible;
  console.log(points_possible_2);
  const points_possible_3 = ag.assignments[2].points_possible;
  console.log(points_possible_3);

  // for (let i = 0; i < ag.length; i++) {
  //   const id = ag.assignements[i].id;

  console.log("=======Info for LearnerSubmission======");
  console.log("=======learners id======");
  const learnerId_125 = submissions[0].learner_id;
  console.log(learnerId_125);
  const learnerId_132 = submissions[3].learner_id;
  console.log(learnerId_132);

  console.log("=======assignment_id======");
  let assignmentId_1;
  let assignmentId_2;
  let assignmentId_3;

  for (let i = 0; i < submissions.length - 2; i++) {
    const assignmentId = submissions[i].assignment_id;
    // Assign assignment_ids to variables based on the object index
    switch (i) {
      case 0:
        assignmentId_1 = assignmentId;
        break;
      case 1:
        assignmentId_2 = assignmentId;
        break;
      case 2:
        assignmentId_3 = assignmentId;
        break;
      default:
        break;
    }
  }
  console.log(assignmentId_1);
  console.log(assignmentId_2);
  console.log(assignmentId_3);

  console.log("=======submission_date======");

  const submission_at_1_125 = submissions[0].submission.submitted_at;
  console.log(submission_at_1_125);
  const submission_at_2_125 = submissions[1].submission.submitted_at;
  console.log(submission_at_2_125);
  const submission_at_3_125 = submissions[2].submission.submitted_at;
  console.log(submission_at_3_125);
  const submission_at_1_132 = submissions[3].submission.submitted_at;
  console.log(submission_at_1_132);
  const submission_at_2_132 = submissions[4].submission.submitted_at;
  console.log(submission_at_2_132);

  console.log("=======score======");

  const score_1_125 = submissions[0].submission.score;
  console.log(score_1_125);
  const score_2_125 = submissions[1].submission.score;
  console.log(score_2_125);
  const score_3_125 = submissions[2].submission.score;
  console.log(score_3_125);
  const score_1_132 = submissions[3].submission.score;
  console.log(score_1_132);
  const score_2_132 = submissions[4].submission.score;
  console.log(score_2_132);

  console.log("========finding avg & scores for learnes");

  // Avg for student 125

  function findAvg(a, b, c, d) {
    return (a + b) / (c + d);
  }

  function findScore(a, b) {
    return a / b;
  }

  const avg125 = findAvg(
    score_1_125,
    score_2_125,
    points_possible_1,
    points_possible_2
  );
  console.log(avg125);

  const score1_125 = findScore(score_1_125, points_possible_1);
  console.log(score1_125);

  const score2_125 = findScore(score_2_125, points_possible_2);
  console.log(score2_125);

  // Avg score for student 132

  //find new score for 132 - late submission
  let latePenalty;
  if(submission_at_2_132 > due_at_2){
    latePenalty = 0.1 * points_possible_2;
  }

  const score_latePenalty = score_2_132 - latePenalty;

  const avg132 = findAvg(score_1_132, score_latePenalty, points_possible_1, points_possible_2);
  console.log(avg132);

  const score1_132 = findScore(score_1_132, points_possible_1)
  console.log(score1_132);

  const score2_132 = findScore(score_latePenalty, points_possible_2)
  console.log(score2_132);

  const obj1 = {};
  const obj2 = {};
  





}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);

// const result = [
//   {
//     id: 125,
//     avg: 0.985, // (47 + 150) / (50 + 150)
//     1: 0.94, // 47 / 50
//     2: 1.0 // 150 / 150
//   },
//   {
//     id: 132,
//     avg: 0.82, // (39 + 125) / (50 + 150)
//     1: 0.78, // 39 / 50
//     2: 0.833 // late: (140 - 15) / 150
//   }
// ];

// return result;

//   // Assign assignment_ids to variables based on the object index
//   if (i === 0) {
//     id1 = id;
//   } else if (i === 1) {
//     id2 = id;
//   } else if (i === 2) {
//     id3 = id;
//   } else if (i === 3) {
//     id4 = id;
//   }
// }
