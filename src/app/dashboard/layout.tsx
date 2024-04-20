import { RedirectType, redirect } from "next/navigation";
import Aside from "../_components/aside";
import { auth } from "@clerk/nextjs/server";
import isUserReady from "../actions/isUserReady";

export default async function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    const { userId } = auth();
    const userReady = await isUserReady();
    if (!userReady) redirect("/complete-profile", RedirectType.replace);
    return (
        <div className="grid h-screen w-full pl-[56px]">
            <Aside />
            {children}
        </div>
    );
}
