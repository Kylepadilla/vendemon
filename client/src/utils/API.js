import axios from "axios";

export default {
  // Gets all alerts
  getAlerts: function() {
    return axios.get("/api/alerts/create");
  },
  // Gets the alert with the given id
  getAlert: function(id) {
    return axios.get("/api/alerts/create" + id);
  },
  // Deletes the alert with the given id
  deleteProp: function(id) {
    return axios.delete("/api/alerts/create" + id);
  },
  // Saves a alert to the database
  saveAlert: function(alertData) {
    return axios.post("/api/alerts/create", alertData);
  }
}