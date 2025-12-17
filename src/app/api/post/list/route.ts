import { NextRequest } from "next/server";
import { withApiHandler } from "@/utils/withApiHandler";
import { error, success } from "@/utils/apiResponse";
import { BUSINESS_STATUS_CODE, DB_NAME } from "@/config/constants";
import clientPromise from "@/lib/mongodb";
import { v4 as uuidv4 } from "uuid";

// 限制頁數
// page = 1 & limit = 10
export const GET = withApiHandler(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 10;

  const skip = (Number(page) - 1) * Number(limit); // Ｘ頁Ｎ筆

  // 連接資料庫
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection("posts");
  const total = await collection.countDocuments()
  const posts = await collection.find({}).skip(skip).limit(Number(limit)).sort({
    createAt: -1
  }).toArray();


  return Response.json(success({
    posts,
    total,
    page: Number(page),
    limit: Number(limit),
    totalPages: Math.ceil(total/Number(limit))
  }), { status: 200 });
});
