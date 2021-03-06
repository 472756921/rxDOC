const host = 'http://www.bensonchen.cn/admin/app/api/';

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
export const getLatestActivityById = () => {
  return host + 'latestActivity/getLatestActivityById?id=';
}
export const getActivityStyleById = () => {
  return host + 'activityStyle/getActivityStyleById?id=';
}
export const getAllCustomerShare = () => {
  return host + 'customerShare/getAllCustomerShare';
}
export const doctorChatCustomersave = () => {
  return host + 'doctorChatCustomer/save';
}
export const getCustomerShareById = () => {
  return host + 'customerShare/getCustomerShareById?id=';
}
export const getAllCustomerShareComment = () => {
  return host + 'customerShareComment/getAllCustomerShareComment?page=1&size=100&customerShareId=';
}
export const getChildrent = () => {
  return host + 'doctorConsult/getChildrent?size=11&page=';
}
export const getServiceNum = () => {
  return host + 'doctorConsult/getServiceNum?date=';
}
export const getAllPatientEducation = () => {
  return host + 'patientEducation/getAllPatientEducation?size=11&page=';
}
export const getPatientEducationById = () => {
  return host + 'patientEducation/getPatientEducationById?id=';
}
export const uploadImg = () => {
  return host + '/base/uploadImg';
}
export const getAllChildrenGrowRecord = () => {
  return host + 'childrenGrowRecord/getAllChildrenGrowRecord?size=11&childrenId=';
}
export const overDoctorConsult = () => {
  return host + 'doctorConsult/overDoctorConsult?id=';
}
export const patientEducationSave = () => {
  return host + 'patientEducation/save';
}
export const getChildrenById = () => {
  return host + 'children/getChildrenById?id=';
}
export const getChildrenHealthRecordById = () => {
  return host + 'childrenHealthRecord/getChildrenHealthRecordById?id=';
}
export const loginDoctor = () => {
  return host + 'doctor/loginDoctor';
}
export const loginZuShou = () => {
  return host + 'doctor/loginZuShou';
}
export const doctorAll = () => {
  return host + 'doctor/doctorAll';
}
export const getUserInfo = () => {
  return host + 'doctor/getUserInfo';
}
export const getDoctorIdDetail = () => {
  return host + 'doctor/getDoctorIdDetail?id=';
}
export const latestActivitysave = () => {
  return host + 'latestActivity/save';
}
export const activityStylesave = () => {
  return host + 'activityStyle/save';
}
export const customerShareComment = () => {
  return host + 'customerShareComment/save';
}
export const getAllChildrenHealthRecord = () => {
  return host + 'childrenHealthRecord/getAllChildrenHealthRecord';
}
export const customerShareSave = () => {
  return host + 'customerShare/save';
}
export const DgetUserInfo = () => {
  return host + 'doctor/getUserType';
}
