"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CornerDownLeft } from "lucide-react";
import { useState } from "react";
import sendMessage from "../_actions/sendMessage";

export const MessageInput = ({
  userId,
  ambulanceId,
}: {
  userId: string;
  ambulanceId: string;
}) => {
    
  const [input, setInput] = useState("");
  const handleSendMessage = () => {
    setInput("");
    document.getElementById("submit-message")?.click();
  };
  return (
    <form
      className="bottom-5 fixed   min-w-[82vw]  md:min-w-[43vw] lg:min-w-[58vw] overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
      action={sendMessage}
    >
      <Label htmlFor="input-message" className="sr-only">
        Message
      </Label>
      <Textarea
        id="input-message"
        value={input}
        name="content"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
      />
      <Input type="hidden" name="ambulanceId" value={ambulanceId} />
      <Input type="hidden" name="senderId" value={userId} />
      <Button type="submit" id="submit-message" className="hidden"></Button>

      <div className="flex items-center p-3 pt-0">
        {/* <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Mic className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Use Microphone</TooltipContent>
                  </Tooltip>
                </TooltipProvider> */}
        <Button
          type="button"
          size="sm"
          className="ml-auto gap-1.5"
          onClick={handleSendMessage}
        >
          Send Message
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </form>
  );
};
