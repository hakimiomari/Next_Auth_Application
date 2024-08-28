"use server";
import axios from "axios";

const appUrl = process.env.BASE_URL;

export const userLogin = async (data: any) => {
  try {
    const response = await axios.post(`${appUrl}/auth/login`, {
      email: data.email,
      password: data.password,
    });
    return { success: true, message: "Logged in successfully" };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message };
  }
};
