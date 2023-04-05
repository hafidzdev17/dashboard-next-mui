import PropTypes from "prop-types";
import { sentenceCase } from "change-case";
// @mui
import { Box, Stack, Rating, Divider, Typography } from "@mui/material";
// utils
import { fShortenNumber, fCurrency } from "../../../utils/formatNumber";
// components
import Label from "../../../components/label";

// ----------------------------------------------------------------------

ProductDetailsSummary.propTypes = {
  product: PropTypes.object,
};

export default function ProductDetailsSummary({ product, ...other }) {
  const { id, name, price, status, totalReview, totalRating } = product;

  return (
    <Stack
      spacing={3}
      sx={{
        p: (theme) => ({
          md: theme.spacing(5, 5, 0, 2),
        }),
      }}
      {...other}
    >
      <Stack spacing={2}>
        <Label
          variant="soft"
          color={"success"}
          sx={{ textTransform: "uppercase", mr: "auto" }}
        >
          Stock
        </Label>

        <Typography
          variant="overline"
          component="div"
          sx={{
            color: status === "sale" ? "error.main" : "info.main",
          }}
        >
          {status}
        </Typography>

        <Typography variant="h5">{name}</Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Rating value={totalRating} precision={0.1} readOnly />

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ({fShortenNumber(totalReview)}
            reviews)
          </Typography>
        </Stack>

        <Typography variant="h4">{fCurrency(price)}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />
    </Stack>
  );
}
