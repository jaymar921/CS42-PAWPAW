import  {UserData}  from "../../models/UserData";
import { GetLocalData, SaveLocalData } from "../LocalDataHandler"

export class AccountRepository{
    constructor(){}
    /**
     * 
     * @returns {Array<UserData>}
     */
    GetAccounts(){
        return GetLocalData("accounts") ?? [];
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