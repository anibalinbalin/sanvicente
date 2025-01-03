"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { css } from "ds/css";
import { flex } from "ds/patterns";

interface PasswordInputProps {
  value: string;
  label?: string;
}

export function PasswordInput({ value, label }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className={css({ display: "flex", flexDirection: "column", gap: "2" })}>
      {label && (
        <span className={css({ textStyle: "body", color: "text2" })}>
          {label}
        </span>
      )}
      <div className={css({ position: "relative", width: "fit" })}>
        <input
          className={css({
            bgColor: "slate8",
            color: "text1",
            px: "3",
            py: "2",
            rounded: "md",
            width: "fit",
            pe: "9",
            border: "none",
            outline: "none",
            _focus: {
              ring: "1",
              ringColor: "slate7",
            },
          })}
          type={isVisible ? "text" : "password"}
          value={value}
          readOnly
        />
        <button
          className={css({
            position: "absolute",
            insetY: "0",
            end: "0",
            display: "flex",
            h: "full",
            w: "9",
            alignItems: "center",
            justifyContent: "center",
            color: "text2",
            transition: "colors",
            _hover: { color: "text1" },
            _focusVisible: {
              outline: "2px solid",
              outlineColor: "slate7",
              outlineOffset: "2px",
            },
          })}
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
        >
          {isVisible ? (
            <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Eye size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
} 