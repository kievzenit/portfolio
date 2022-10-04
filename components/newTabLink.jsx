export default function NewTabLink({href, children, className}) {
    return (
        <a className={className} href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}