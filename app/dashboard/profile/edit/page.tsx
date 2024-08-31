"use client";
import React from "react";
import { AppContext } from "@/app/context/store";
import { useContext } from "react";
import { updateProfile } from "@/app/api/user";

const EditProfile = () => {
  const { user } =  useContext(AppContext);

  const [image, setImage] = React.useState("");
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleLabelClick = () => {
    document.getElementById("file-upload")?.click();
  };

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const saveChanges = async(event:any) =>{
    event?.preventDefault();
    const data = {
        id:user?.id,
        name: name ? name : user?.name,
        email: email ? email : user?.email,
        profile: image ? image : user?.profile
    }
    const response = await updateProfile(data);
  }

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="max-w-xs rounded-2xl border bg-white p-10 text-center shadow-lg">
        <div className="relative">
          <img
            className="mx-auto mb-4 h-32 w-32 rounded-full shadow-lg"
            src={image ? image: user?.profile}
            alt="profile picture"
          />
          <label
            htmlFor="image"
            onClick={handleLabelClick}
            className="text-black"
          >
            <img
              style={{ top: "5rem" }}
              className="w-10 h-8 mb-3 cursor-pointer absolute right-10 rounded-full shadow-lg"
              src="/assets/dashboard/camera.png"
              alt="Bonnie image"
            />
          </label>
        </div>
        <input
          type="file"
          hidden
          onChange={(event) => handleImageUpload(event)}
          id="file-upload"
          name="file-upload"
        />
        <input
          type="text"
          className="mb-3 border-gray-500 border rounded-lg w-full  text-slate-800 py-1 px-2 mx-2"
          onChange={(event) => setName(event?.target.value)}
          value={name ? name : user?.name}
        />
        <input
          type="text"
          className="border-gray-500 border rounded-lg w-full text-slate-800 py-1 px-2 mx-2"
          onChange={(event) => setEmail(event?.target.value)}
          value={email ? email : user?.email}
        />
        <h2 className="font-semibold text-slate-500 mt-2">UI/UX Designer</h2>
        <span className="inline-block">
          <a href="#">
            <i className="fa-brands fa-linkedin text-slate-500 hover:text-slate-800"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter text-slate-500 hover:text-slate-800"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github text-slate-500 hover:text-slate-800"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-codepen text-slate-500 hover:text-slate-800"></i>
          </a>
        </span>
        <p className="mt-8 text-sm font-normal text-slate-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button onClick={(event) =>saveChanges(event)} className="mt-8 rounded-3xl border-2 border-solid border-violet-900 px-8 py-2 font-semibold uppercase tracking-wide text-violet-900 hover:bg-violet-900 hover:text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
