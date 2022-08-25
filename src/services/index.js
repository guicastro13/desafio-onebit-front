import axios from 'axios';
import { useEffect } from 'react';
const baseURL = "http://localhost:3001"

const api = axios.create({baseURL})



export default api;