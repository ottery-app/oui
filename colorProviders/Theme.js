import React from "react";
import * as colors from "../styles/colors";


/**
 * please dont use this i hate it...
 */
export default function Theme({
    primaryColor = colors.primary,
    secondaryColor = colors.secondary,
    tertiaryColor = colors.tertiary,
    primaryTextColor = colors.textDark,
    secondaryTextColor = colors.textPale,
    tertiaryTextColor = colors.textLight,
    children,
}) {
    if (children === undefined) {
        console.warn("oui: Theme has no children");
        return<></>;
    }

    let forAllChildren = (element) => {
        let childArray = [];
    
        if (element.children) {
            element.children.forEach((child)=>{
                childArray.push(forAllChildren(child));
            });
        } else {
            childArray = undefined;
        }
    
        return React.cloneElement(element, {
            primaryColor,
            secondaryColor,
            tertiaryColor,
            primaryTextColor,
            secondaryTextColor,
            tertiaryTextColor,
            children: childArray,
        });
    }

    console.log(children.map((child) => {
        return forAllChildren(child);
    }))

    return(<>
        {children.map((child) => {
            return forAllChildren(child);
        })}
    </>);
}