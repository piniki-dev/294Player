const TimeInfo = (props) => {
    const duration = props.end_time - props.start_time; // 秒
    const formatDuration = (duration) => {
        const minute = Math.floor(duration / 60);
        const second = duration % 60;
        return(
            `${minute}:${second < 10 ? `0${second}` : second}`
        );
    }
    return(
        <span style={{
            color: "rgb(170, 170, 170)",
            fontSize: "12px",
            margin: "0 16px 0 8px"
        }}>
             {formatDuration(props.count)} / {formatDuration(duration)} 
        </span>
    );
}

export default TimeInfo;