export const POST = async request => {
    const {object: {utms} = {}} = await request.json()
    console.log(utms)
    return Response.json({vars: Object.entries(utms).map(([n, v]) => ({n, v}))})
}
