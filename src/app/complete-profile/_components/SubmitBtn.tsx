
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

export const SubmitBtn = ({
    isSubmitDisabled,
}: {
    isSubmitDisabled: boolean;
}) => {
    const { pending } = useFormStatus();
    const { signOut } = useClerk();
    const router = useRouter();
    return (
        <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <Button
                className="w-full"
                type="submit"
                disabled={isSubmitDisabled || pending}
            >
                {pending ? "Loading..." : "Continue"}
            </Button>
            <p className="mt-4">
                Connect with an existing account?
                <Button
                    className="text-[#ff5858] p-0 m-0 font-bold text-lg"
                    variant="link"
                    onClick={() => signOut(() => router.push("/sign-in"))}
                >
                    Sign in.
                </Button>
            </p>
        </div>
    );
};
