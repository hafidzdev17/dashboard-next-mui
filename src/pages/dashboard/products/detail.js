import { useEffect, useState } from "react";
// next
import Head from "next/head";
import { useRouter } from "next/router";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Tab,
  Tabs,
  Card,
  Grid,
  Divider,
  Container,
  Typography,
  Stack,
} from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes";
// layouts
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
// components
import Iconify from "../../../components/iconify/Iconify";
import { SkeletonProductDetails } from "../../../components/skeleton";
// sections
import {
  ProductDetailsSummary,
  ProductDetailsCarousel,
} from "../../../sections/products/details";

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: "100% Original",
    description: "Chocolate bar candy canes ice cream toffee cookie halvah.",
    icon: "ic:round-verified",
  },
  {
    title: "10 Day Replacement",
    description: "Marshmallow biscuit donut dragée fruitcake wafer.",
    icon: "eva:clock-fill",
  },
  {
    title: "Year Warranty",
    description: "Cotton candy gingerbread cake I love sugar sweet.",
    icon: "ic:round-verified-user",
  },
];

const product = {
  id: "2569ce0d517a7f06d3ea1f24",
  name: "Product Details",
  status: "sale",
  description:
    "Culpa quis culpa non aliquip ipsum laboris dolor. Cillum do sunt adipisicing pariatur et sint proident irure occaecat in. Ea ullamco ipsum laboris aliqua mollit cillum sint enim nostrud et irure. Cillum enim pariatur adipisicing occaecat veniam voluptate cillum. Officia qui ipsum eu amet minim nostrud ex mollit labore..",
  images: [
    "https://shanibacreative.com/wp-content/uploads/2021/08/membuat-foto-produk-makanan.jpg",
    // "https://assets.website-files.com/6277e4df50fd58d2359b4f00/62a898d23f0a9719d962b084_6127c731b4bb73bd53079950_content_xclass_basic_food_photog_demo1_1.jpeg",
    // "https://lh5.googleusercontent.com/BxT3shrgVssNd8g9au09AujTF1K-OXxBRJiggBnhKlJGzXHQhefT4V9lqvjziRDKcJl_R5LF-u9qqMInagTvSl32dHlarbkcrOrHNoXVllSkreHGVwkpv3400CZm7-TmxxZH1CFWABEZpeF-Vg",
    // "https://jsp.co.id/wp-content/uploads/2019/09/tips-dasar-fotografi-makanan.jpg",
    // "https://assets.website-files.com/6277e4df50fd58d2359b4f00/62a898d235e4fd778e044f9c_6127c8321a83529dea521c9e_istilah-junk-food-dan-fast-food-sering-dianggap-sama-_200221225305-561.jpeg",
  ],
  price: 250.0,
  totalReview: 10,
  totalRating: 4,
};

ProductDetails.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default function ProductDetails() {
  return (
    <>
      <Head>
        <title>{`Products: ${product?.name || ""} | Xetia.io`}</title>
      </Head>

      <Container maxWidth={"lg"}>
        {product && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={7}>
                <ProductDetailsCarousel product={product} />
              </Grid>

              <Grid item xs={12} md={6} lg={5}>
                <ProductDetailsSummary product={product} />
              </Grid>
            </Grid>

            <Box
              gap={5}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              sx={{ my: 10 }}
            >
              {SUMMARY.map((item) => (
                <Box key={item.title} sx={{ textAlign: "center" }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: 64,
                      height: 64,
                      mx: "auto",
                      borderRadius: "50%",
                      color: "primary.main",
                      bgcolor: (theme) =>
                        `${alpha(theme.palette.primary.main, 0.08)}`,
                    }}
                  >
                    <Iconify icon={item.icon} width={36} />
                  </Stack>

                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: "text.secondary" }}>
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </>
        )}

        {/* {isLoading && <SkeletonProductDetails />} */}
      </Container>
    </>
  );
}
