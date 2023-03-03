import { Box, List, ListItem, ListItemText } from "@mui/material";
import { Container, Draggable } from "react-smooth-dnd";
import { arrayMoveImmutable } from "array-move";

const SortableList = (props) => {

    const onDrop = ({ removedIndex, addedIndex }) => {
        props.setSortableSongList(arrayMoveImmutable(props.sortableSongList, removedIndex, addedIndex));
    }

    return(
        <Box
            sx={{
                width: "50%",
                height: "100%",
                overflowY: "scroll",
            }}
        >
            <List>
                <Container onDrop={onDrop}>
                    {props.sortableSongList.map(song => (
                        <Draggable key={song.id}>
                            <ListItem>
                                <ListItemText primary={song.song_title} />
                            </ListItem>
                        </Draggable>
                    ))}
                </Container>
            </List>
        </Box>
    );
}

export default SortableList;