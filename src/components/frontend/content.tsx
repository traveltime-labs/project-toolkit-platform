
type ContentProps = {
    title?: string,
    children: React.ReactNode
}

function Content ({title, children}: ContentProps) {
    return (
        <div className="my-5 border-2 rounded-2xl bg-white dark:bg-black">
            <div className="p-5">
            {title && (
                <h2 className="font-bold mb-4 text-2xl">{title}</h2>
            )}
                {children}
            </div>
        </div>
    )
}

export default Content;