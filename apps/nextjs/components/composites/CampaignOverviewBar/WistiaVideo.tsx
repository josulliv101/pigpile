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
      maxH="348px"
      flex="1"
      className="wistia_responsive_padding"
      position="relative"
      padding="56.25% 0 0 0"
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
            position="absolute"
            top="0"
            width="100%"
            opacity={isWistiaReady ? 1 : 0}
            overflow="hidden"
            transition="opacity 200ms"
          >
            <Image
              src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
              filter="blur(5px)"
              objectFit="contain"
              height="100%"
              width="100%"
              alt=""
              aria-hidden="true"
              onLoad={onLoad}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
