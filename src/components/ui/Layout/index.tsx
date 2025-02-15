interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Layout({ children, ...props }: LayoutProps) {
    return (
        <main style={{ padding: "0 30px", minHeight: "100vh" }} {...props}>
            {children}
        </main>
    )
}