/* eslint-disable react/jsx-max-props-per-line */
import React from "react";
import Head from "next/head";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Box, Container, Grid } from "@mui/material";

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
          <Grid container spacing={3}>
            <h1>Hello, Products Page</h1>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
