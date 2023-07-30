import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogoutBtn from "./LogoutBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
    let session = await getServerSession(authOptions);
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="navbar">
                    <Link href="/" className="logo">
                        Jcforum
                    </Link>
                    <Link href="/list">List</Link>
                    {session ? <LogoutBtn /> : <LoginBtn />}
                </div>
                {children}
            </body>
        </html>
    );
}
