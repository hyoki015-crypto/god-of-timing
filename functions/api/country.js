export function onRequestGet(context) {
    const country =
    context.request.cf?.country || "";

    return Response.json(
        { country },
        {
            headers: {
                "Cache-Control": "no-store"
            }
        }
    );
}
