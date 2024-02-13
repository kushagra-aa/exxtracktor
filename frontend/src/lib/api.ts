import axios, { CreateAxiosDefaults } from "axios";

// If new Methods are added then update this Enum
type AvailableMethodsType = "GET" | "POST" | "PATCH" | "DELETE";

// Configuration object
const config: CreateAxiosDefaults = {
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `myAuth ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
};

// Create a separate instance with configured base URL and headers
const axiosAPI = axios.create(config);

// Helper function for validating required fields
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateRequiredFields = (fields: string[], ...args: any[]) => {
  // Add type annotation for args
  for (const field of fields) {
    if (!args.some((arg) => arg[field])) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
};

// Implement a method to execute all requests with pre-configured base URL and headers
const apiRequest = (
  method: AvailableMethodsType,
  url: string,
  request = {},
  headers = {},
  params = {}
) => {
  // Additional headers can be merged here
  headers = {
    ...headers,
  };

  // Validate method, url, and required fields based on chosen HTTP method
  switch (method) {
    case "GET":
      validateRequiredFields(["url", "headers"], { url, headers });
      break;
    case "POST":
    case "PATCH":
      validateRequiredFields(["url", "request", "headers"], {
        url,
        request,
        headers,
      });
      break;
    case "DELETE":
      validateRequiredFields(["url", "headers"], {
        url,
        headers,
      });
      break;
    default:
      throw new Error(`Invalid HTTP method: ${method}`);
  }
  // Return axios promise with enhanced error handling
  return axiosAPI({
    url,
    method,
    params,
    headers,
    data: request,
  })
    .then((res) => {
      // Validate response if needed (e.g., check status code)
      if (res.status !== 200) {
        throw new Error(`API error: ${res.statusText}`);
      }
      return Promise.resolve(res);
    })
    .catch((err) => {
      // Log errors and provide more informative messages
      console.error("API request error:", err);
      if (err.response) {
        return Promise.reject({
          status: err.response.status,
          message: err.response.statusText,
        });
      } else {
        return Promise.reject(err);
      }
    });
};

// Function to execute HTTP GET request
const get = (url: string, headers: object = {}) =>
  apiRequest("GET", url, {}, headers);
// Function to execute HTTP POST request
const post = (url: string, request: object, headers: object = {}) =>
  apiRequest("POST", url, request, headers);
// Function to execute HTTP PATCH request
const patch = (url: string, request: object, headers: object) =>
  apiRequest("PATCH", url, request, headers);
// Function to execute HTTP DELETE request
const del = (url: string, headers: object) =>
  apiRequest("DELETE", url, {}, headers);

// Expose your methods to other services or actions
const API = {
  get,
  post,
  patch,
  del,
};

export default API;
