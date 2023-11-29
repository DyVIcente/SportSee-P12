const apiUrl = "http://localhost:3000";

import {
  mockupUserActivity,
  mockupUserPerformance,
  mockupUserAverageSessions,
  mockupUserMainData,
} from "./mockData";

import { ApiDataModel } from "./apiDataModel";

/**
 *
 * @param {*} id
 * @returns
 */
export const getUserActivity = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/user/${id}/activity`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserInfos = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/user/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserPerformance = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/user/${id}/performance`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserAverageSessions = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/user/${id}/average-sessions`);
    const data = await res.json();

    const apiDataModel = new ApiDataModel(data);
    const formattedData = apiDataModel.getUserAverageSessions();

    return formattedData;
  } catch (e) {
    console.log(e);
  }
};

const apiEndpoints = {
  USER_ACTIVITY: (id) => `${apiUrl}/user/${id}/activity`,
  USER_PERFORMANCE: (id) => `${apiUrl}/user/${id}/performance`,
  USER_AVERAGE_SESSIONS: (id) => `${apiUrl}/user/${id}/average-sessions`,
  USER_MAIN_DATA: (id) => `${apiUrl}/user/${id}`,
};

const getData = async (type, id) => {
  try {
    const url = apiEndpoints[type](id);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur de fetch à ${url}, status: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreur de fetch:", error);

    return getMockupDataByType(type);
  }
};

const getMockupDataByType = (type) => {
  switch (type) {
    case "USER_ACTIVITY":
      return mockupUserActivity;
    case "USER_PERFORMANCE":
      return mockupUserPerformance;
    case "USER_AVERAGE_SESSIONS":
      return mockupUserAverageSessions;
    case "USER_MAIN_DATA":
      return mockupUserMainData;
    default:
      return null;
  }
};

export default getData;
