import styled from "styled-components"
import { primary, textLight} from "../styles/colors";
import { minHeight } from "../styles/clickable";
import IconButton from "./IconButton";
import AddButton from "./AddButton";

const Button = styled.div`
    position: fixed;
    bottom: ${minHeight};
    right: 0;
    padding: 30px 20px;
`;

export default function BottomButton(props) {

    const pass = {
        ...props,
        primaryColor:primary,
        primaryTextColor:textLight,
        secondaryTextColor:textLight
    }

    return (
        <Button>
            {(props.icon === "pluss")
            ?<AddButton type="solid" {...pass} />
            :<IconButton {...pass} />}
        </Button>
    );
}