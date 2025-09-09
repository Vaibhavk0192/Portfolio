import type { Metadata } from "next";
import "./globals.css";
import { LogsProvider } from "@/context/logContext";
import { SelectedFolderProvider } from "@/context/selectedFolderContext";
import { SelectedTabProvider } from "@/context/selectedTabContext";
import { PanelProvider } from "@/context/panelContext";

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
        <PanelProvider>
          <SelectedTabProvider>
            <SelectedFolderProvider>
              <LogsProvider>{children}</LogsProvider>
            </SelectedFolderProvider>
          </SelectedTabProvider>
        </PanelProvider>
      </body>
    </html>
  );
}
