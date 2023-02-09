export type postType = {
    id:number
    title: string,
    body:string    
}

export type postStateType = {
    posts: postType[],
    status: "idle" | "loading" | "succeeded" | "failed",
    error?:null|string
}