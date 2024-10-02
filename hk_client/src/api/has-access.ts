import {authenticatedRequests} from "./authenticated-request.ts";

export async function hasAccess() {
  return await authenticatedRequests.get('has-access');
}
