export const POST = async request => {
    const data = await request.json()
    console.log(data)
    const {object: {utms} = {}} = data
    console.log(utms)
    return Response.json(utms)
}
