import Auth from "@/components/auth";

export default function Page(){
    const user = false;

    if (!user) return (
        <div className="w-[92%] lg:w-full max-2-[1280px] h-screen max-w-7xl mx-auto">
            <Auth></Auth>
        </div>
    )

    return <div>Page</div>;
}