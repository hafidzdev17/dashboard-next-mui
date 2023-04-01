/* eslint-disable react/jsx-max-props-per-line */
import React from "react";
import Head from "next/head";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import {
  SvgIcon,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import { ProductCard } from "../../../sections/products";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { PATH_DASHBOARD as dashboard } from "../../../routes";
import NextLink from "next/link";

const products = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    name: "Product 1",
    status: "sale",
    description:
      "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
    cover: "/assets/products/product-1.png",
    price: 250.0,
  },
  {
    id: "ed2b900870ceba72d203ec15",
    name: "Product 2",
    status: "sale",
    description:
      "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
    cover: "/assets/products/product-2.png",
    price: 500.0,
  },
  {
    id: "a033e38768c82fca90df3db7",
    name: "Product 3",
    status: "sale",
    cover: "/assets/products/product-3.jpg",
    price: 52.0,
  },
  {
    id: "1efecb2bf6a51def9869ab0f",
    name: "Product 4",
    status: "sale",
    cover: "/assets/products/product-4.png",
    price: 350.0,
  },
  {
    id: "1ed68149f65fbc6089b5fd07",
    name: "Product 5",
    status: "sale",
    cover: "/assets/products/product-5.png",
    price: 25.0,
  },
  {
    id: "5dab321376eff6177407e887",
    name: "Product 6",
    status: "sale",
    cover: "/assets/products/product-7.png",
    price: 50.0,
  },
];

const SkeletonLoad = (
  <>
    {[...Array(12)].map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{ paddingTop: "115%", borderRadius: 2 }}
        />
      </Grid>
    ))}
  </>
);

const Products = () => {
  return (
    <>
      <Head>
        <title>Products | Xetia Dashboard</title>
      </Head>

      <Container maxWidth="xl">
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
            sx={{ my: 5 }}
          >
            <Stack spacing={1}>
              <Typography variant="h4">Products</Typography>
            </Stack>
            <div>
              <Button
                LinkComponent={NextLink}
                href={`${dashboard.products.add}`}
                startIcon={
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                }
                variant="contained"
              >
                Add
              </Button>
            </div>
          </Stack>

          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3}>
                {SkeletonLoad && <ProductCard product={product} />}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
