import { API_LINKS, AuthConstants } from "../../../../contants/ApplicationConstants";
import  {UserData}  from "../../models/UserData";
import { GetLocalData, SaveLocalData } from "../LocalDataHandler"

export class AccountRepository{
    constructor(){}
    /**
     * 
     * @returns {Array<UserData>}
     */
    async GetAccounts(){
        const response = await fetch(API_LINKS.GET_ALL, { method: "GET"});
        const data = await response.json();
        return data;
    }

    async Login(email, password){
        const response = await fetch(API_LINKS.LOGIN_URL, { method: "POST", headers: {"content-type": "application/json"}, body: JSON.stringify({email: email, password: password})});
        const data = await response.json();
        return data;
    }
    /**
     * @param {(a: UserData)=>{}} predicate 
     * @returns {UserData | undefined}
     */
    GetSingleAccount(predicate){
        return this.GetAccounts().filter(predicate)[0];
    }
    /**
     * 
     * @param {UserData} userAccount 
     */
    SaveAccount(userAccount){
        var accounts = this.GetAccounts();

        if(accounts.filter((a) => a.ID === userAccount.ID || a.Email === userAccount.Email).length > 0){
            return false;
        }

        accounts.push(userAccount);

        SaveLocalData("accounts", accounts);
        return true;
    }
}