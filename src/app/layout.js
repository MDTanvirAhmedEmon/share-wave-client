import Providers from "@/libs/providers";
import "./globals.css";

export const metadata = {
  title: "Share Wave",
  description: "share wave - a social network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
