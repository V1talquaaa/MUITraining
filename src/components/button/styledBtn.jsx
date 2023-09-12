import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledBtn = styled(Button)({
    backgroundColor: "#ff0000",
    color: "#151515",
    '&:hover': {
        backgroundColor: '#ABCDEF',
        color: '#FFF'
    }

})

export default function StyledButton ({text}) {
    return <StyledBtn >{text}</StyledBtn>
}