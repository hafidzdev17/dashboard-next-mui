/* eslint-disable react/jsx-max-props-per-line */
import React from "react";
import Head from "next/head";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ProductCard } from "../../sections/products";

const products = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    name: "product-1",
    status: "sale",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
    cover: "/assets/products/product-1.png",
    price: 250.0,
  },
  {
    id: "ed2b900870ceba72d203ec15",
    name: "product-2",
    status: "sale",
    description:
      "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
    cover: "/assets/products/product-2.png",
    price: 500.0,
  },
  {
    id: "a033e38768c82fca90df3db7",
    name: "product-3",
    status: "sale",
    cover: "/assets/products/product-3.png",
    price: 52.0,
  },
  {
    id: "1efecb2bf6a51def9869ab0f",
    name: "product-4",
    status: "sale",
    cover: "/assets/products/product-4.png",
    price: 350.0,
  },
  {
    id: "1ed68149f65fbc6089b5fd07",
    name: "product-5",
    status: "sale",
    cover: "/assets/products/product-5.png",
    price: 25.0,
  },
  {
    id: "5dab321376eff6177407e887",
    name: "product-6",
    status: "sale",
    cover: "/assets/products/product-7.png",
    price: 50.0,
  },
];

const Products = () => {
  return (
    <>
      <Head>
        <title>Products | Xetia Dashboard</title>
      </Head>

      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row">
              <Typography variant="h4">Products</Typography>
            </Stack>

            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid xs={12} md={6} lg={3} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
