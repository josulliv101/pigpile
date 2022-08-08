import Script from "next/script";
import { AbsoluteCenter, Box, Image, CircularProgress } from "@josulliv101/core";
import { useVideo } from "./useVideo";

interface Props {
  image?: string;
  playerColor?: string;
  videoId: string;
}

export const WistiaVideo: React.FC<Props> = ({ playerColor = "999999", image, videoId }) => {
  const { isWistiaReady, initWistia, setIsWistiaReady, setInitWistia } = useVideo();
  if (!videoId) {
    return <Box>A wistia video id is required.</Box>;
  }
  return (
    <Box position="relative">
      {initWistia && (
        <>
          <Script
            src={`https://fast.wistia.com/embed/medias/${videoId}.jsonp`}
            strategy="lazyOnload"
          />
          <Script
            src="https://fast.wistia.com/assets/external/E-v1.js"
            strategy="lazyOnload"
          />
        </>
      )}
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
              overflow="hidden"
              position="absolute"
              top="0"
              width="100%"
            >
              <Image
                alt=""
                aria-hidden="true"
                cursor="pointer"
                height="100%"
                objectFit="contain"
                onClick={() => {
                  setInitWistia(true);
                  if (typeof window !== "undefined") {
                    window._wq = window._wq || [];
                    _wq.push({
                      id: videoId,
                      onReady: function (video) {
                        video.play();
                        setIsWistiaReady(true);
                      },
                    });
                  }
                }}
                src={image}
                width="100%"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {initWistia && !isWistiaReady && (
        <CircularProgress
          as={AbsoluteCenter}
          isIndeterminate
          position="absolute"
          zIndex="overlay"
        />
      )}
    </Box>
  );
};
