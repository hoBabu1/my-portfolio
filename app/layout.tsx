import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Blockchain Developer",
  description: "Smart contract security engineer and full-stack Web3 developer specializing in DeFi, security auditing, and blockchain development.",
  keywords: ["blockchain", "web3", "solidity", "smart contracts", "defi", "security researcher"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
