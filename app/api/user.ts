"use server";
import axios from "axios";
import { cookies } from "next/headers";

export const getUserProfile = async () => {
  const access_token = cookies().get("access_token");
  try {
    const response = await axios.get(process.env.BASE_URL + "/users/user", {
      headers: {
        Authorization: `Bearer ${access_token?.value}`,
      },
    });
    return { success: true, data: response.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message };
  }
};

// upload image

export const uploadProfile = async (file:any) => {
  const access_token = cookies().get("access_token");
  try {
    const response = await axios.patch(
      process.env.BASE_URL + "/users/user/profile",
      file,
      {
        headers: {
          Authorization: `Bearer ${access_token?.value}`,
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message };
  } 
}

// update user
export const updateProfile = async (data: Object) => {
  const access_token = cookies().get("access_token");
  try {
    const response = await axios.patch(
      process.env.BASE_URL + "/users/user/update",
      data,
      {
        headers: {
          Authorization: `Bearer ${access_token?.value}`,
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message };
  }
};
