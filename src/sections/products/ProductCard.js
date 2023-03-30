import PropTypes from "prop-types";
import { paramCase } from "change-case";
// next
import NextLink from "next/link";
// @mui
import { Box, Card, Link, Stack, Fab } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../routes";
// utils
import { fCurrency } from "../../utils/formatNumber";
// components
import Iconify from "../../components/iconify/Iconify";
import Label from "../../components/label";
import Image from "../../components/image";
// ----------------------------------------------------------------------

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ProductCard({ product }) {
  const { id, name, cover, price, status, priceSale } = product;

  const linkTo = PATH_DASHBOARD.products.detail;

  return (
    <Card
      sx={{
        "&:hover .add-cart-btn": {
          opacity: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", p: 1 }}>
        {status && (
          <Label
            variant="filled"
            color={(status === "sale" && "error") || "info"}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            {status}
          </Label>
        )}

        <Image alt={name} src={cover} ratio="1/1" sx={{ borderRadius: 1.5 }} />
      </Box>

      <Stack spacing={2.5} sx={{ p: 3 }}>
        <Link
          component={NextLink}
          href={linkTo}
          color="inherit"
          variant="subtitle2"
          noWrap
        >
          {name}
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={0.5} sx={{ typography: "subtitle1" }}>
            {/* {priceSale && (
              <Box
                component="span"
                sx={{ color: "text.disabled", textDecoration: "line-through" }}
              >
                {fCurrency(priceSale)}
              </Box>
            )} */}

            <Box component="span">{fCurrency(price)}</Box>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
