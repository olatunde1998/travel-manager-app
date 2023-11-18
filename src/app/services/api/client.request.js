// import { apiService } from "../index";
import {apiService} from "../index"

/** client. The React-Query key is "CreateLGAApi" */
export const CreateClientApi = async (data) => {
  const payload = { ...data };
  const response = await apiService.post({
    url: "/api/clients",
    payload,
  });
  return response;
};

/** client. The React-Query key is "getClientsApi" */
export const getClientsApi = async () => {
  const response = await apiService.get('/api/clients');
  return response;
};


/** Client. The React-Query key is "getClientsApi" */
export const getClientDetailsApi = async (_id) => {
  const response = await apiService.get(`/api/clients/${_id}`);
  return response;
};
