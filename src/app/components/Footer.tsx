export default function Footer() {
    return (
        <div className="bg-gray-800 text-white p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <span>&copy; 2025 Calesive. All rights reserved.</span>
                <div className="flex space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                </div>
            </div>
        </div>
    );
}