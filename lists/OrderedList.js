import UnorderedList from "./UnorderedList";

export default function OrderedList({
    id,
    className,
    title,
    onClick,
    primaryColor,
    secondaryColor,
    primaryTextColor,
    children,
    sort,
}) {
    console.warn("as of now the ordered list does not sort");
    return(
        <UnorderedList
            id={id}
            className={className}
            title={title}
            onClick={onClick}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            primaryTextColor={primaryTextColor}
        >
            {children}
        </UnorderedList>
    );
}