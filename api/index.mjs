export const POST = async request => {
    console.log(request)
    const {object: {utms} = {}} = await request.json()
    return Response.json(await request.json({vars: Object.entries(utms).map(([n, v]) => ({n, v}))}))
}
