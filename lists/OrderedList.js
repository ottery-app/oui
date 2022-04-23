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

    let childrenArray = [...children];

    if (sort===undefined) {
        console.warn("oui: Warning. OrderedList has no sort. Displaying images in unsorted order.");
    }
    
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
            {childrenArray.sort(sort)}
        </UnorderedList>
    );
}