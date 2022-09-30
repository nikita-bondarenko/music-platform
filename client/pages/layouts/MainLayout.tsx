import {FC, ReactComponentElement, ReactNode} from "react";
import Navbar from "../../components/Navbar";
import {Container} from "@mui/material";
import Player from "../../components/Player";

interface MainLayoutProps {
    children: ReactNode | ReactComponentElement<any>
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            <Container style={{margin: '90px auto'}}>
                {children}

            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;