import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-x-7xl mx-auto">
        <div className="flex item-center space-x-5">
            <Link href="/">
                <img 
                    className="w-1/4 object-contain cursor-pointer"
                    src="https://i.postimg.cc/jq3PvYZt/Untitled-Artwork-37.png"
                    alt="" 
                />
            </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Projects</h3>
            <h3 className="text-white bg-purple-600 px-4 py-1 rounded-full">Follow</h3>
        </div>
        </div>
    </header>
    );
}

export default Header;