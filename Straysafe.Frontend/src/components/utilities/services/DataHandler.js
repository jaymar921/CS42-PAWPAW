import { API_LINKS } from "../../../contants/ApplicationConstants"
import { PetData } from "../models/PetData"
import { UserData } from "../models/UserData";

/**
 * 
 * @param {PetData} petData 
 * @returns {any} JSON response
 */
export const SubmitReportStray = async (petData) => {
    const content = {
        method: "POST",
        headers: { "content-type": "application/json"},
        body: JSON.stringify(petData)
    }
    const response = await fetch(API_LINKS.REPORT_STRAY_ADD, content);
    return await response.json();
}


/**
 * 
 * @param {PetData} petData 
 * @returns {any} JSON response
 */
export const UpdateReportStray = async (petData) => {
    const content = {
        method: "PATCH",
        headers: { "content-type": "application/json"},
        body: JSON.stringify(petData)
    }
    const response = await fetch(API_LINKS.REPORT_STRAY_UPDATE, content);
    return await response.json();
}


/**
 * 
 * @param {Object} param0 
 * @param {string} param0.reporter
 * @param {string} param0.organization
 * @returns {Promise<Array<PetData>>} JSON response
 */
export const RetrieveReports = async (reporter = "", organization = "") => {
    const content = {
        method: "GET",
        headers: { "content-type": "application/json"},
    }

    const response = await fetch(API_LINKS.REPORT_STRAY_GETALL + `?reporter=${reporter}&organization=${organization}`, content);
    const data = await response.json();
    return data.data;
}

/**
 * 
 * @param {string} id 
 * @returns {Promise<PetData>} JSON response
 */
export const RetrieveSingleReport = async (id) => {
    const content = {
        method: "GET",
        headers: { "content-type": "application/json"},
    }

    const response = await fetch(API_LINKS.REPORT_STRAY_GET(id) , content);
    const data = await response.json();
    return data.data;
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<UserData?>}
 */
export const RetrieveSingleAccount = async (id) => {
    const content = {
        method: "GET",
        headers: { "content-type": "application/json"},
    }

    const response = await fetch(API_LINKS.USER_GET(id) , content);
    const data = await response.json();
    return data.data;
}