"use server";
import axios from "axios";
import { cookies } from "next/headers";

const appUrl = process.env.BASE_URL;

export const userLogin = async (data: any) => {
  try {
    const response = await axios.post(`${appUrl}/auth/login`, {
      email: data.email,
      password: data.password,
    });
    cookies().set("access_token", response.data.access_token);
    return { success: true, message: "Logged in successfully" };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message };
  }
};

export const logout = async () => {
  try {
    cookies().delete("access_token");
    return true;
  } catch (error) {
    return false;
  }
};
