import { supabase } from "./supabase";
import { UserData } from "../puck/config";

export const getPageRes = async (path: string) =>
  (await supabase.from("puck").select("*").eq("path", path).maybeSingle()) as {
    status: number;
    data?: {
      data: UserData;
    };
  };
