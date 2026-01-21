export const POST = async request => {
    const {object: {utms} = {}} = await request.body
    return Response.json(await request.json({vars: Object.entries(utms).map(([n, v]) => ({n, v}))}))
}
