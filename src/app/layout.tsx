import "./globals.css";

export const metadata = {
    title: "Next Js 13"
}

function Layout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

export default Layout;