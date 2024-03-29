"use client";
import { accessToken } from "@/utils/accessToken";
import { Spinner } from "keep-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PrivateRoutes = ({ children }) => {
  const token = accessToken.getAccessToken();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/log-in");
      setLoading(true);
    }
  }, [router, token]);
  if (loading) {
    return (
      <div className=" w-7 mx-auto ">
        <Spinner className="my-60" color="gray" size="lg" />
      </div>
    );
  }

  return <div>{children}</div>;
};

export default PrivateRoutes;
