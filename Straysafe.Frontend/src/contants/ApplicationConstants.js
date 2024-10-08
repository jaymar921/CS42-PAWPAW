import StraySafeLogo1 from "/logo/straysafe_logo_1.png";
import StraySafeLogo2 from "/logo/straysafe_logo_2.png";
import LandingPageImage from "../assets/images/landing/landingimg.png";
import SampleCardImg from "../assets/images/samples/catImg.png";
import LandingPageImage_Adopt from "../assets/images/landing/adoptimage.png"
import UserActivityCardImg from "../assets/images/admin/UserActivityCard.jfif";

export const ApplicationConstants = {
    StraySafeLogo1,
    StraySafeLogo2,
    LandingPageImage,
    LandingPageImage_Adopt,
    UserActivityCardImg,
    SampleCardImg,
    ROUTE_LOGIN: "login",
    ROUTE_LANDING: "/",
    ROUTE_SIGNUP_AS_STRAVER: "/sign-up-as-straver",
    ROUTE_SIGNUP_AS_ORGANIZATION: "/sign-up-as-organization",
    ROUTE_SIGNUP_AS: "/sign-up-as",
    ROUTE_ADOPT_PET: "/adopt-pet",
    ROUTE_ADMIN_DASHBOARD: "/admin",
    ROUTE_ANNOUNCEMENT: "/announcement",
    ROUTE_CHAT: "/chat",
    ROUTE_ORG_REPORTS: "/reports",
    ROUTE_VIEW_PET_PROFILE: (id) => `/adopt-pet/profile/${id}`,
    ROUTE_ADD_PET_FOR_ADOPTION: "/adopt-pet/add",
    ROUTE_PROFILE: "/profile",
    ROUTE_REPORT_STRAY: "/report_stray",
    LANDING_PAGE_ABOUT_1: `
        "StraySafe" is designed to address animal welfare by offering a
        comprehensive, community-based platform to streamline the processes
        of stray animal rescue, care, and adoption. StraySafe aspires to
        bridge the gap between animal rescue organizations and the public,
        creating a more efficient and responsive system.
    `,
    LANDING_PAGE_ABOUT_2: `Many of our adoptables from the streets of Cebu City need loving homes. By adopting, you give them a chance to find the love and security they deserve.`
}

export const AuthConstants = {
    ROLE_STRAYVER: "Strayver",
    ROLE_ORGANIZATION: "Organization",
    ROLE_ADMIN: "Admin"
}

const APIUrl = "http://localhost:5077";

export const API_LINKS = {
    USER_LOGIN_URL: APIUrl + "/user/login",
    USER_REGISTER_URL: APIUrl + "/user/register",
    USER_GET_ALL: APIUrl + "/user/getall",
    USER_DELETE: APIUrl + "/user/delete",
    USER_UPDATE: APIUrl + "/user/update",
    MEDIA_UPLOAD: APIUrl + "/media/upload"
}