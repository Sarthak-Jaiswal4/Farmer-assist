import z from "zod";

export const signup=z.object({
    username:z.string(),
    email:z.string(),
    code:z.number().lte(6)
})

export const signin=z.object({
    email:z.string(),
    code:z.number().lte(6)
})

export interface content {
    url: string;
    title: string;
    content: string;
}