import { NextRequest } from "next/server";
import { send } from "@/app/actions/send";

export async function POST(request: NextRequest) {
  return send(request);
}
