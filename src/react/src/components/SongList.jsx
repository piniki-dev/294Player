import { Box, Container, Divider } from "@mui/material";
import SongListItem from "./SongListItem";
import { headerTotalHeight } from "./Setting";

const SongList = (props) => {
    return(
        <Box
            sx={{
                height: "100%",
                width: "100%",
                position: "relative",
                paddingTop: headerTotalHeight,
                backgroundColor: "primary.main",
            }}
        >
            <Container maxWidth="xl"
                sx={{
                    marginTop: "15px",
                }}
            >
                {props.items.map(item => (
                    <>
                        <SongListItem item={item} setPlayingSongInfo={props.setPlayingSongInfo} isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying}
                                      isPlayerPageView={props.isPlayerPageView} setIsPlayerPageView={props.setIsPlayerPageView} setPlayingSongIndex={props.setPlayingSongIndex}
                        />
                        <Divider light sx={{marginBottom: "8px"}}/>
                    </>
                ))}
                <Box sx={{height: props.marginUnderList}} />
            </Container>
        </Box>
    );
}

export default SongList;