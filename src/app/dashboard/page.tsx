"use client"
import {
    CornerDownLeft,
    LifeBuoy,
    ListCollapse,
    Settings,
    Share,
    Siren,
    SquareUser,
    Triangle,
    LogOut,
    Dumbbell
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { AssistanceDetails } from "../_components/assistanceDetails";
import { currentUser } from "@clerk/nextjs/server";
import { Chat } from "../_components/chat";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
export default function Dashboard() {
    const { signOut } = useClerk();
    const router = useRouter();
    return (
        <div className="grid h-screen w-full pl-[56px]">
            <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
                <div className="border-b p-2">
                    <Button variant="outline" size="icon" aria-label="Home">
                        <Siren className="animate-ping size-5 fill-red-500" />
                    </Button>
                </div>
                <nav className="grid gap-1 p-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mt-auto rounded-lg"
                                    aria-label="Account"
                                >
                                    <SquareUser className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Account
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mt-auto rounded-lg"
                                    aria-label="Help"
                                >
                                    <LifeBuoy className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Help
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mt-auto rounded-lg"
                                    aria-label="Training"
                                    onClick={() => signOut(() => router.push("/"))}
                                >
                                    <Dumbbell className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Training
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mt-auto rounded-lg"
                                    aria-label="Sign out"
                                    onClick={() => signOut(() => router.push("/"))}
                                >
                                    <LogOut className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Sign out
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
            <div className="flex flex-col">
                <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                    <h1 className="text-xl font-semibold">Emergency</h1>
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <ListCollapse className="size-4" />
                                <span className="sr-only">List</span>
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="max-h-[80vh]">
                            <DrawerHeader>
                                <DrawerTitle>Emergency Nearby</DrawerTitle>
                            </DrawerHeader>
                            <div className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                                <AssistanceDetails />
                            </div>
                        </DrawerContent>
                    </Drawer>
                    <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto gap-1.5 text-sm"
                    >
                        <Share className="size-3.5" />
                        Share
                    </Button>
                </header>
                <main className="grid flex-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        className="relative hidden flex-col items-start gap-8 md:flex"
                        x-chunk="dashboard-03-chunk-0"
                    >
                        <div className="grid w-full items-start gap-6">
                            <AssistanceDetails />
                        </div>
                    </div>
                    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                        <div className="flex-1 ">
                            <Chat />
                        </div>
                        <form className="bottom-5 fixed   min-w-[82vw]  md:min-w-[43vw] lg:min-w-[58vw] overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
                            <Label htmlFor="message" className="sr-only">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Type your message here..."
                                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                            />

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
                                <Button type="button" size="sm" className="ml-auto gap-1.5">
                                    Send Message
                                    <CornerDownLeft className="size-3.5" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}
