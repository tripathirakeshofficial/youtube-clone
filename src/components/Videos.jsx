import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map(
        (item, idx) =>
          (item.id.channelId || item.id.videoId) && (
            <Box key={idx}>
              {item.id.channelId && <ChannelCard channelDetail={item} />}
              {item.id.videoId && <VideoCard video={item} />}
            </Box>
          )
      )}
    </Stack>
  );
};

export default Videos;
