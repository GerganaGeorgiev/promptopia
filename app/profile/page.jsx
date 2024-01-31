"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

function MyProfile() {
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);
  const handleEdit = () => {};
  const handleDelete = async () => {};
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`api/users/${session.user?.id}/posts`);
      const data = await response.json();
      setMyPosts(data);
      console.log(myPosts);
    };
    if (session?.user.id) fetchPosts();
  }, []);
  return (
    <Profile
      name="My"
      desc="Welcome to your personalised profile page"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default MyProfile;
