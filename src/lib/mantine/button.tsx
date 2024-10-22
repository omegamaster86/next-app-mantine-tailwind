import { Button as MantineButton } from "@mantine/core";
import { cloneElement, forwardRef } from "react";
import { ButtonProps } from "@mantine/core";

export const NotMoveButton = forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    ButtonProps & { dent?: boolean; sx?: object }
>(({ sx, dent, ...props }, ref) => {
    return cloneElement(<MantineButton/>, {
        sx: {
            ...sx,
            "&:not(:disabled):active": dent ? { transform: "none" } : undefined,
        },
        ref,
        ...props,
    });
});

export const ButtonGroup = NotMoveButton;