const dotStyles = {
  color: "#000000",
  fontSize: "2rem",
  fontWeight: "500",
  bgcolor: "var(--blue-500-default)",
  width: 96,
  height: 32,
  background: "transparent",
  borderRadius: "8px",
};

const dotBlue = {
  ...dotStyles,
  borderColor: "var(--blue-500-default)",
};

const dotGreen = {
  ...dotStyles,
  borderColor: "var(--green-900)",
};

export { dotStyles, dotBlue, dotGreen };
