import Loader from "@/components/global/loader";
import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader state>...Loading</Loader>
    </div>
  );
}

export default Loading;
