import { Box, Button } from "@chakra-ui/react";
import { color } from "../../../styles/colors";

export const DownloadButtonComponent = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/youtube.py";
    link.download = "youtube.py";
    link.target = "_blank";
    link.click();
  };

  return (
    <Box // ----------   S E V E N T H     -------------  //
      display="flex"
      justifyContent="center"
      width={["vw", "100%", "100%"]}
      p={4}
    >
      <Button
        bg={color.ACCENT}
        color={"white"}
        rounded={"full"}
        size={"lg"}
        _hover={{
          bg: color.ACCENT_HOVER,
        }}
        onClick={handleDownload}
      >
        Скачать настройки
      </Button>
    </Box>
  );
};
