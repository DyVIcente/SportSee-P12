class ApiDataModel {
  constructor(data) {
    this.data = data;
  }

  getUserMainData() {
    if (!this.data || !this.data.data) {
      console.error("Format de données incorrect dans ApiDataModel");
      return {};
    }

    const keyDataMapping = {
      calorieCount: "Calories",
      carbohydrateCount: "Glucides",
      lipidCount: "Lipides",
      proteinCount: "Protéines",
    };

    const mappedKeyData = Object.keys(keyDataMapping).reduce((acc, key) => {
      acc[keyDataMapping[key]] = this.data.data.keyData[key];
      return acc;
    }, {});

    return {
      id: this.data.data.id,
      userInfos: {
        age: this.data.data.userInfos.age,
        firstName: this.data.data.userInfos.firstName,
        lastName: this.data.data.userInfos.lastName,
      },
      keyData: mappedKeyData,
      todayScore: this.data.data.todayScore,
      score: this.data.data.score,
    };
  }

  getUserAverageSessions() {
    const dayAbbreviations = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };

    if (!this.data || !this.data.data || !this.data.data.sessions) {
      console.error("Format de données incorrect dans ApiDataModel session");
      return [];
    }

    return this.data.data.sessions.map((session) => ({
      day: dayAbbreviations[session.day] || session.day,
      sessionLength: session.sessionLength,
    }));
  }

  getUserPerformance() {
    const kindMapping = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    if (!this.data || !this.data.data || !this.data.data.data) {
      console.error(
        "Format de données incorrect dans ApiDataModel performance"
      );
      return [];
    }

    return this.data.data.data.map((performance) => ({
      kind: kindMapping[performance.kind] || performance.kind,
      value: performance.value,
    }));
  }
}

export { ApiDataModel };
