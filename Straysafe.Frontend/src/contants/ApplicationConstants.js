import StraySafeLogo1 from "/logo/straysafe_logo_1.png";
import StraySafeLogo2 from "/logo/straysafe_logo_2.png";
import LandingPageImage from "../assets/images/landing/landingimg.png";
import SampleCardImg from "../assets/images/samples/catImg.png";

export const ApplicationConstants = {
    StraySafeLogo1,
    StraySafeLogo2,
    LandingPageImage,
    SampleCardImg,
    ROUTE_LOGIN: "login",
    ROUTE_LANDING: "/",
    ROUTE_SIGNUP_AS_STRAVER: "/sign-up-as-straver",
    ROUTE_SIGNUP_AS_ORGANIZATION: "/sign-up-as-organization",
    ROUTE_SIGNUP_AS: "/sign-up-as",
    ROUTE_ADOPT_PET: "/adopt-pet",
    ROUTE_VIEW_PET_PROFILE: (id) => `/adopt-pet/profile/${id}`,
    ROUTE_ADD_PET_FOR_ADOPTION: "/adopt-pet/add",
}