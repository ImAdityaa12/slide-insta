import { cn } from "@/lib/utils";
import React from "react";
import { Spinner } from "@/components/global/loader/spinner";

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

function Loader({ children, state, className, color }: Props) {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
}

export default Loader;