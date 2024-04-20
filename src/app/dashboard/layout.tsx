import { RedirectType, redirect } from "next/navigation";
import Aside from "../_components/aside";

export default async function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid h-screen w-full pl-[56px]">
            <Aside />
            {children}
        </div>
    );
}
