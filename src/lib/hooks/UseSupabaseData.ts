import { useState, useEffect } from "react";
import { createServiceClient } from "@/utils/supabase/service-client";

interface rsvps {
  id: string;
  name?: string;
  email: string;
  action: string;
}

interface rsvpgroup {
  data: rsvps[];
}

export function useSupabaseData() {
  const [data, setData] = useState<rsvpgroup[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const supabase = createServiceClient();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("rsvp_tokens")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setData(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [supabase]);

  return { data, loading, error };
}
