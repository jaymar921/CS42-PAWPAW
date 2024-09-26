import { ApplicationConstants } from "../../../contants/ApplicationConstants"
import { RedirectTo } from "../PageUtils"

export const GetProfileInformation = () => {
    // TODO: Handle the account here
    RedirectTo(ApplicationConstants.ROUTE_LOGIN)
}