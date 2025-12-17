// post API

export const getPostList = async (page: string) => {
    const res = await fetch(`/api/post/list?page=${page}&limit=2`)
    const resData = await res.json()
    return resData.data
}

export const addPost = async (data: {title: string, content: string}) => {
    const res = await fetch(`/api/post/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const resData = await res.json()
    return resData.data
}

export const getPost = async (id: string) => {
    const res = await fetch(`/api/post/detail?id=${id}`)
    const resData = await res.json()
    return resData.data
}