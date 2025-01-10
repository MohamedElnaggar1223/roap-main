export default function DeletePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">How to delete your account</h1>
            <div className="w-full max-w-4xl max-h-[540px] mb-8">
                <video
                    className="w-full rounded-lg shadow-lg max-h-[540px]"
                    controls
                    autoPlay={true}
                    width={920}
                    height={540}
                >
                    <source src="/images/delete.mov" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}