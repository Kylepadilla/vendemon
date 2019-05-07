import axios from "axios";

export function sendAlert(alertData){
    axios
    .post("/api/alerts/create", {data: alertData})
    .then(alert("Submission Successful!")
    );
}

// export function fetchAlerts() {
//   axios
//   .get("/api/alerts/create")
//   .then(res => console.log(res.body.data)
//   );
// }
  



