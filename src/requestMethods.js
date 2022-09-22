import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGU3OTI0YzUwMmRjMjk0MWRmNjFmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjc1Mzk4NywiZXhwIjoxNjYzMDEzMTg3fQ.jQJYaufIIF3H-sNgIl3yfOe2hE5PR_zdzbqAfWwcjls";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});