/* eslint-disable react/jsx-max-props-per-line */
import React from "react";
import Head from "next/head";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { ProductCreate } from "../../../sections/products";

const CreateProducts = () => {
  return (
    <>
      <Head>
        <title>Create Products | Xetia Dashboard</title>
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
              <Typography variant="h4">Create a new product</Typography>
            </Stack>
          </Stack>

          <ProductCreate />
        </Container>
      </Container>
    </>
  );
};

CreateProducts.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CreateProducts;
