import { CreateClient } from '@prismicio/client';

export function getPrismicClient(req){
    const prismic = createClient(process.env.PRISMIC_ENDEPOINT, {
        req,
        acessToken: process.env.PRIMSIC_ACCESS_TOKEN,
    });
    return prismic;
}