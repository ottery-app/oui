import UnorderedList from "./UnorderedList";

export default function OrderedList({
    id,
    className,
    title,
    onAdd,
    primaryColor,
    secondaryColor,
    primaryTextColor,
    children,
    sort,
}) {
    return(
        <UnorderedList
            id={id}
            className={className}
            title={title}
            onAdd={onAdd}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            primaryTextColor={primaryTextColor}
        >
            {children}
        </UnorderedList>
    );
}