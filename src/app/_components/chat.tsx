import { Message } from "./Message";
import { ScrollArea } from "@/components/ui/scroll-area";
export const Chat = () => {
  return (
    <ScrollArea className=" h-screen">
      <div className="flex-col space-y-5">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="h-[230px] xl:h-[250px]"></div>
    </ScrollArea>
  );
};
