const host = 'http://118.31.38.219/admin/app/api/';

export const getJZList = () => {
  return host + 'doctorConsult/getAllDoctorConsult';
}
export const getChatList = () => {
  return host + 'doctorChatCustomer/getAllDoctorChatCustomer?doctorConsultId=';
}
export const getDoctorById = () => {
  return host + 'doctor/getDoctorDetail';
}
export const saveDoctor = () => {
  return host + 'doctor/saveDoctor';
}
export const getAllLatestActivity = () => {
  return host + 'latestActivity/getAllLatestActivity';
}
export const getAllActivityStyle = () => {
  return host + 'activityStyle/getAllActivityStyle';
}
