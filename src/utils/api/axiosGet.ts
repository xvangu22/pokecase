import { axiosClient } from "@config/axios";

export async function axiosGet<T>(url: string): Promise<T> {
  try {
    const res = await axiosClient.get<T>(url);
    return res.data;
  } catch (e) {
    console.error((e as Error).message);
    throw e;
  }
}