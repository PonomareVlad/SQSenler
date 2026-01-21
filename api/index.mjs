export const POST = async request => {
    console.log(request.body)
    const {object: {utms}} = request.body
    return Response.json(await request.json({vars: Object.entries(utms).map(([n, v]) => ({n, v}))}))
}
