"use client";

import { Button } from "@/components/button";
import { useEffect, useRef } from "react";

function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {};
  const handleChange = () => {};

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <main className="h-svh bg-slate-700 grid place-items-center">
      <div className="bg-slate-400 h-48 w-96 grid place-items-center">
        <Button
          variant={"success"}
          ref={buttonRef}
          onChange={handleChange}
          type="button"
          onClick={handleClick}
          className="bg-purple-600"
        >
          Click Aqui
        </Button>
      </div>
    </main>
  );
}

export default Home;
