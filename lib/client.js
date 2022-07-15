// for sanity client

import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url"; //Quickly generate image urls from Sanity image records.


export const client=sanityClient({
    projectId:"mdocqtni",
    dataset:"production",
    useCdn:true,
    apiVersion:'2021-08-31',
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning:true
});


const builder=ImageUrlBuilder(client);
export const urlFor=(source) => builder.image(source);