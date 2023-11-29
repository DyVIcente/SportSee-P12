// Mockup pour les données d'activité utilisateur
const mockupUserActivity = {
  data: {
    userId: 123,
    sessions: [
      { day: "2020-07-01", kilogram: 83, calories: 240 },
      { day: "2020-07-02", kilogram: 82, calories: 220 },
      { day: "2020-07-03", kilogram: 81, calories: 100 },
      { day: "2020-07-04", kilogram: 81, calories: 190 },
      { day: "2020-07-05", kilogram: 80, calories: 160 },
      { day: "2020-07-06", kilogram: 79, calories: 162 },
      { day: "2020-07-07", kilogram: 78, calories: 290 },
    ],
  },
};

// Mockup pour les performances utilisateur
const mockupUserPerformance = {
  data: {
    userId: 123,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      { value: 160, kind: 1 },
      { value: 130, kind: 2 },
      { value: 140, kind: 3 },
      { value: 60, kind: 4 },
      { value: 90, kind: 5 },
      { value: 90, kind: 6 },
    ],
  },
};

// Mockup pour les sessions moyennes utilisateur
const mockupUserAverageSessions = {
  data: {
    userId: 123,
    sessions: [
      { day: 1, sessionLength: 18 },
      { day: 2, sessionLength: 23 },
      { day: 3, sessionLength: 35 },
      { day: 4, sessionLength: 40 },
      { day: 5, sessionLength: 45 },
      { day: 6, sessionLength: 0 },
      { day: 7, sessionLength: 10 },
    ],
  },
};

// Mockup pour les données principales utilisateur
const mockupUserMainData = {
  data: {
    id: 123,
    userInfos: { firstName: "Marco", lastName: "Polo", age: 34 },
    todayScore: 0.22,
    keyData: {
      calorieCount: 1780,
      proteinCount: 135,
      carbohydrateCount: 230,
      lipidCount: 70,
    },
  },
};

export {
  mockupUserActivity,
  mockupUserPerformance,
  mockupUserAverageSessions,
  mockupUserMainData,
};
