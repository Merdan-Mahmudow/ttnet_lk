import { SimpleGrid, Stack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import {
  DNSAComponent,
  DNSComponent,
  DownloadButton,
  IPComponent,
  PasswordComponent,
  QRComponent,
  SIXTHComponent,
  SSIDComponent,
} from "../components/SettingPage";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack margin="auto" maxWidth="900px">
      <SimpleGrid minChildWidth="sm" gap={["0px", "7px", "10px"]}>
        <SSIDComponent />

        <IPComponent />

        <DNSComponent />

        <DNSAComponent />

        <PasswordComponent />

        <SIXTHComponent />

        <DownloadButton />

        <QRComponent />
      </SimpleGrid>
    </Stack>
  );
}
