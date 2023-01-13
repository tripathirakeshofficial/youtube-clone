import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, profilePage = false, direction = "row" }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) =>
        profilePage
          ? item.id.videoId && (
              <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
              </Box>
            )
          : (item.id.channelId || item.id.videoId) && (
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
