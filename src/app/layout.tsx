import type { Metadata } from "next";
import "./globals.css";
import { LogsProvider } from "@/context/logContext";
import { SelectedFolderProvider } from "@/context/selectedFolderContext";
import { SelectedTabProvider } from "@/context/selectedTabContext";

export const metadata: Metadata = {
  title: "Vaibhav Kapoor",
  description: "Vaibhav Kapoor's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SelectedTabProvider>
          <SelectedFolderProvider>
            <LogsProvider>{children}</LogsProvider>
          </SelectedFolderProvider>
        </SelectedTabProvider>
      </body>
    </html>
  );
}
