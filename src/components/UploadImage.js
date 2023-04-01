import { isString } from "lodash";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { styled } from "@mui/material/styles";
import { Box, Typography, alpha, Stack } from "@mui/material";
import IllustrationUpload from "./IllustrationUpload";

const DropZoneStyle = styled("div")(({ theme }) => ({
  outline: "none",
  display: "flex",
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(5, 0),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create("padding"),
  backgroundColor: theme.palette.background.neutral,
  border: `1px dashed ${alpha(theme.palette.grey[500], 0.32)}`,
  "&:hover": {
    opacity: 0.72,
    cursor: "pointer",
  },
  [theme.breakpoints.up("md")]: { textAlign: "left", flexDirection: "row" },
}));

UploadImage.propTypes = {
  error: PropTypes.bool,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sx: PropTypes.object,
};

export default function UploadImage({
  error,
  file,
  multiple = false,
  sx,
  ...other
}) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    ...other,
    accept: {
      "image/jpeg": [".jpg", ".jpeg", ".png"],
    },
  });

  const hasFile = !!file && multiple;

  const hasFiles = multiple && file > 1;

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <DropZoneStyle
        {...getRootProps()}
        sx={{
          height: "200px",
          ...(isDragActive && { opacity: 0.72 }),
          ...(file && { padding: "12% 0" }),
        }}
      >
        <input {...getInputProps()} />

        {!file ? (
          <>
            <IllustrationUpload sx={{ height: 120, marginLeft: 3 }} />
            <Box sx={{ p: 3, ml: { md: 3 } }}>
              <Typography gutterBottom variant="subtitle1">
                Drop or select images
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Drop files here or click browse thorough your machine
              </Typography>
            </Box>
          </>
        ) : (
          ""
        )}

        {hasFile ? (
          <Box
            component="img"
            alt="file preview"
            src={isString(file) ? file : file.preview}
            sx={{
              borderRadius: 1,
              objectFit: "cover",
              position: "absolute",
              maxWidth: "200px",
              maxHeight: "200px",
            }}
          />
        ) : (
          ""
        )}
      </DropZoneStyle>
    </Box>
  );
}
