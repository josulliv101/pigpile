import { Box, Image } from "@josulliv101/core";

interface Props {
  isWistiaReady?: boolean;
  playerColor?: string;
  videoId: string;
  onLoad: () => void;
}

export const WistiaVideo: React.FC<Props> = ({
  isWistiaReady,
  playerColor = "999999",
  videoId,
  onLoad,
}) => {
  if (!videoId) {
    return <Box>A wistia video id is required.</Box>;
  }
  return (
    <Box
      className="wistia_responsive_padding"
      flex="1"
      maxH="348px"
      padding="56.25% 0 0 0"
      position="relative"
    >
      <Box
        className="wistia_responsive_wrapper"
        height="100%"
        left="0"
        position="absolute"
        top="0"
        width="100%"
      >
        <Box
          className={`wistia_embed wistia_async_${videoId} seo=false videoFoam=true playerColor=${playerColor}`}
          height="100%"
          position="relative"
          width="100%"
        >
          <Box
            className="wistia_swatch"
            height="100%"
            left="0"
            opacity={isWistiaReady ? 1 : 0}
            overflow="hidden"
            position="absolute"
            top="0"
            transition="opacity 200ms"
            width="100%"
          >
            <Image
              alt=""
              aria-hidden="true"
              filter="blur(5px)"
              height="100%"
              objectFit="contain"
              onLoad={onLoad}
              src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
              width="100%"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
