import Button from "./button";

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-transparent border-b fixed z-10 w-full border-gray-800">
            <div className="flex items-center">
                <span className="text-xl font-bold text-white">RI.P.</span>
            </div>
            <div className="flex gap-3 bg-zinc-900 p-1.5 rounded-full">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="px-4 py-2 leading-[1.5] rounded-full text-gray-400 font-medium text-sm hover:bg-zinc-800 border border-zinc-800 transition"
                    >
                        {link.name}
                    </a>
                ))}
                <Button className="text-zinc-900">Resume</Button>
            </div>
        </nav>
    );
}