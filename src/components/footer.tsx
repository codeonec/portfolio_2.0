import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="mt-12">
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Upper row: two columns */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-6 border-b border-gray-800">
                    {/* Left column: heading + links (About, Work, Contact) */}
                    <div className="">
                        <h3 className="">Ritul Patel</h3>
                        <div className="inline-flex space-x-4 mt-4 text-sm">
                            <a href="/about" className="text-gray-400 hover:text-gray-300">
                                About
                            </a>
                            <a href="/work" className="text-gray-400 hover:text-gray-300">
                                Work
                            </a>
                            <a href="/contact" className="text-gray-400 hover:text-gray-300">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Right column: vertical contact actions (Email, Resume) */}
                    <div className="">
                        <h3 className="mb-4">Get in touch</h3>
                        <div className="flex flex-col space-y-2 text-sm">
                            <a
                                href="mailto:hello@example.com"
                                className="flex items-center text-gray-400 hover:text-gray-300"
                                aria-label="Send email"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8" />
                                </svg>
                                hello@example.com
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-400 hover:text-gray-300"
                                aria-label="Open resume"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m0 0l-3-3m3 3l3-3M7 20h10a2 2 0 002-2V7l-5-4H7a2 2 0 00-2 2v13a2 2 0 002 2z" />
                                </svg>
                                Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom row: social links + copyright */}
                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-300"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .5C5.73.5.96 5.27.96 11.54c0 4.68 3.03 8.65 7.24 10.05.53.1.72-.23.72-.51 0-.25-.01-.92-.01-1.8-2.94.64-3.56-1.26-3.56-1.26-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.07.08 1.63 1.1 1.63 1.1.94 1.61 2.48 1.15 3.09.88.09-.69.37-1.15.67-1.41-2.35-.27-4.82-1.18-4.82-5.24 0-1.16.41-2.11 1.09-2.86-.11-.27-.47-1.36.1-2.83 0 0 .89-.28 2.92 1.09a10.1 10.1 0 012.66-.36c.9.01 1.8.12 2.64.36 2.03-1.37 2.92-1.09 2.92-1.09.57 1.47.21 2.56.1 2.83.68.75 1.09 1.7 1.09 2.86 0 4.07-2.47 4.97-4.82 5.23.38.33.72.98.72 1.98 0 1.43-.01 2.59-.01 2.94 0 .28.19.61.73.51 4.2-1.4 7.22-5.37 7.22-10.05C23.04 5.27 18.27.5 12 .5z" />
                            </svg>
                        </a>

                        <a
                            href="https://twitter.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-300"
                            aria-label="Twitter"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M23 4.56c-.8.36-1.66.6-2.56.71a4.48 4.48 0 001.97-2.47 8.95 8.95 0 01-2.83 1.08 4.47 4.47 0 00-7.62 4.07A12.7 12.7 0 013 3.15a4.47 4.47 0 001.38 5.96 4.42 4.42 0 01-2.02-.56v.06a4.47 4.47 0 003.58 4.38c-.46.12-.95.18-1.45.07a4.48 4.48 0 004.18 3.1A8.96 8.96 0 012 19.54a12.66 12.66 0 006.86 2.01c8.23 0 12.74-6.82 12.74-12.74 0-.19 0-.39-.01-.58A9.1 9.1 0 0023 4.56z" />
                            </svg>
                        </a>

                        <a
                            href="https://linkedin.com/in/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-300"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.46-2.15 2.96v5.65H9.35V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.55v6.69zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM6.9 20.45H3.77V9h3.13v11.45z" />
                            </svg>
                        </a>
                    </div>

                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Your Mum. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;