import gear from "./gear.svg";
import pfp from "./pfp.svg";
import dice from "./dice.svg";
import check from "./check.svg";
import alert from "./alert.svg";

/**
 * this is the same as a regular image tag however it has a few extra features. For one it allows the user access to default images.
 * secondly it throws warnings when best practices are not followed.
 * @param {string} src - The source of the image.
 * @param {string} alt - The alternative text of the image.
 * @param {string} id - The id of the image.
 * @param {string} className - The class name of the image.
 * @param {string} width - The width of the image. This should be any valid css size value.
 * @param {string} height - The height of the image. This should be any valid css size value.
 * @param {function} onClick - The onClick function of the image.
 * @returns {ReactElement} - The image.
 }}
 * 
 */
function Image({src, alt, width, height, id, className, onClick}) {
    switch (src) {
        case "alert":
            src = alert;
            alt = "alert";
            break;
        case "check":
            src = check;
            alt = "check";
            break;
        case "dice":
            src = dice;
            alt = "dice";
            break;
        case "gear":
            src = gear;
            alt = "gear";
            break;
        case "pfp":
            src = pfp;
            alt = "pfp";
            break;
        default:
            src = src;
    }

    if (alt === undefined) {
        console.warn("oui: Image should always have a alt field");
    }

    if (width === undefined) {
        console.warn("oui: Image should always have a width field");
    }

    if (height === undefined) {
        console.warn("oui: Image should always have a height field");
    }

    return (
        <img 
            id={id}
            src={src} 
            alt={alt} 
            width={width} 
            height={height}
            onClick={onClick}
            className={"oui-image " + className}
        />
    );
}

export default Image;