"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-background">
      <h2 className="text-foreground">Something went wrong!</h2>
      <button className="text-foreground" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
