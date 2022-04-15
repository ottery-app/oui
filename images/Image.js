import gear from "./gear.svg";
import pfp from "./pfp.svg";
import dice from "./dice.svg";
import check from "./check.svg";
import alert from "./alert.svg";

function Image({src, alt, width, height, className, onClick}) {
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

    return (
        <img 
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