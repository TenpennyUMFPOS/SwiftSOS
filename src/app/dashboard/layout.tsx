import { auth } from "@clerk/nextjs/server";
import { RedirectType, redirect } from "next/navigation";
import checkUserReady from "../actions/isUserReady";
import Footer from "./dashboard-components/Footer";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { userId } = auth();
    const userReady = await checkUserReady();
    if (!userReady) redirect("/complete-profile", RedirectType.replace);
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow relative flex justify-center items-center overflow-x-hidden bg-gray-400">
                {children}
            </main>
            <Footer />
        </div>
    );
}