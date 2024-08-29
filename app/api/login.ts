"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { z } from "zod";
import { requiredData } from "@/app/lib/schema";

type Inputs = z.infer<typeof requiredData>;
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

// register user
export const registerFunctin = async(formData:Inputs) => {
  try {
    const response = await axios.post(`${appUrl}/auth/register`, formData);
    cookies().set("access_token", response.data.access_token);
    return { success: true, message: "registered  successfully" };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message };
  }
};

// get users

export const getUsers = async () => {
  const access_token = cookies().get("access_token");
  try {
    const response = await axios.get(`${appUrl}/user`,{
      headers: {
        Authorization: `Bearer ${access_token?.value}`,
      },
    });
    return { success:true, data:response.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message };
  }
};
