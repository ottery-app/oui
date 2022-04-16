export default function OrderedList({
    id,
    className,
    title,
    onAdd,
    primaryColor,
    secondaryColor,
    primaryTextColor,
    secondaryTextColor,
    children,
}) {
    console.log(<div id="id" className="className" key="key">innerHTML</div>)

    return(
        <div>
            <div>
                title
            </div>
            <ol>
                {children.map(element => {
                    return <li>{element}</li>
                })}
            </ol>
        </div>
    );
}