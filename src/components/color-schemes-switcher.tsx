"use client";
import { NotMoveButton } from "@/lib/mantine/button";
import { useMantineColorScheme, Button, Group } from "@mantine/core";

export function ColorSchemesSwitcher() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme("light")}>Light</Button>
      <Button onClick={() => setColorScheme("dark")}>Dark</Button>
      <Button onClick={() => setColorScheme("auto")}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
      <NotMoveButton sx={{"&:not(:disabled):active": { transform: "none" }}}>NotMoveButton</NotMoveButton>
      <NotMoveButton dent={true} color="red">NotMoveButton</NotMoveButton>
    </Group>
  );
}
