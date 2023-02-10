import configs from "../configs.json";

export const urlBuilder = (src:string | undefined) => {
    if(!src){ src = ``}
    return configs.STRAPI_URL + src
}

