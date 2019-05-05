import axios from "axios";

export default {
  // Gets all alerts
  getAlerts: function() {
    return axios.get("/api/alerts");
  },
  // Gets the alert with the given id
  getAlert: function(id) {
    return axios.get("/api/alerts/" + id);
  },
  // Deletes the alert with the given id
  deleteAlert: function(id) {
    return axios.delete("/api/alerts/" + id);
  },
  // Saves a alert to the database
  saveAlert: function(alertData) {
    return axios.post("/api/alerts", alertData);
  }
}