import { getServerSession } from "next-auth";

import requireAuth from "@/utils/require-auth";

import options from "@/config/auth";

async function Profile() {
  await requireAuth();
  const session = await getServerSession(options);
  console.log("session: ", session);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
export default Profile;
