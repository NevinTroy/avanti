import { NextResponse } from "next/server";
import { z } from "zod";
import { saveQuote } from "@/lib/db";

const QuoteSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  address: z.string().min(3),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = QuoteSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", issues: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    await saveQuote(parsed.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to save quote", error);
    return NextResponse.json(
      { error: "Unable to save quote right now" },
      { status: 500 },
    );
  }
}

