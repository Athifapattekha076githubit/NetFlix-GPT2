export const Netflix_Logo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const Netflix_bg_Logo = "https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg";

export const User_Icon = "https://occ-0-55-56.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

//  export const User_Icon  ="https://tse1.mm.bing.net/th/id/OIP.dFzfhP8BchbUqIy6L8zhdwAAAA?pid=Api&P=0&h=180";
const API_KEY = "Bearer "+process.env.REACT_APP_TMDB_KEY;
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY,
  }}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400";

export const SUPPORTED_LANGUAGE = [{
  identifier: "en", name:"English",
},
{
  identifier: "hi", name:"Hindi",
},
{
  identifier: "spanish", name:"Spanish",
},
{identifier: "arabic", name:"Arabic",},]



export const OPENAI_KEY = process.env.REACT_APP_OpenRouterAI_KEY;