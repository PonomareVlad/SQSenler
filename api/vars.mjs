export const POST = async request => {
    const data = await request.json()
    console.log(data)
    const {object: {utms} = {}} = data
    console.log(utms)
    return Response.json({vars: Object.entries(utms).map(([n, v]) => ({n, v}))})
}
