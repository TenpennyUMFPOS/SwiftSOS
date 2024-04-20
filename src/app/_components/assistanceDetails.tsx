"use client";

import { Instructions } from "./instructions";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Description } from "./description";

export const AssistanceDetails = () => {
  const [requestAssistance, setRequestAssistance] = useState(false);
  const offerAssistance = () => {
    setRequestAssistance(true);
  };
  return (
    <>
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">
          Emergency Assistance Details
        </legend>
        {requestAssistance ? (
          <Description />
        ) : (
          <div className="grid gap-3">
            <Button
              className="w-32"
              variant="default"
              onClick={offerAssistance}
            >
              Offer assistance
            </Button>
            if you're willing to help nearby ambulances. Your location will be
            shared with crews. Stay safe and await further instructions.
          </div>
        )}
      </fieldset>
      {requestAssistance && <Instructions />}
    </>
  );
};
