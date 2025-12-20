import { UserData } from "../puck/config";
import { supabase } from "./supabase";

export const getPageRes = async (path: string) =>
  (await supabase.from("puck").select("*").eq("path", path).maybeSingle()) as {
    status: number;
    data?: {
      data: UserData;
    };
  };
