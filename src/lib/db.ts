import { createClient } from "@supabase/supabase-js";

type QuotePayload = {
  name: string;
  phone: string;
  email: string;
  address: string;
  message?: string;
};

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase environment variables are missing");
  }

  return createClient(url, serviceRoleKey);
}

export async function saveQuote(data: QuotePayload) {
  const supabase = getSupabaseClient();

  const { error } = await supabase
    .from("quotes")
    .insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      message: data.message ?? "",
    });

  if (error) {
    throw new Error(error.message);
  }
}

