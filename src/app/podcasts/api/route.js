import {podcasts} from "./data";

export async function GET(request) {
    return Response.json(podcasts);
}