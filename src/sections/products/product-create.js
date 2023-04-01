import * as Yup from "yup";
import { useCallback, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// next
import { useRouter } from "next/router";
// @mui
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  InputAdornment,
  TextField,
  FormHelperText,
} from "@mui/material";
// components
import UploadImage from "../../components/UploadImage";
import { ErrorSnackbar, SuccessSnackbar } from "../../components/Snackbar";

const category = [
  {
    value: "fruit",
    label: "Fruit",
  },
  {
    value: "vegeratarian",
    label: "Vegetarian",
  },
];

const currency = [
  {
    value: "JPY",
    label: "JPY",
  },
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "IDR",
    label: "IDR",
  },
];

export default function ProductCreate() {
  const UploadImages = Yup.object().shape({
    cover: Yup.mixed().required("Cover is required"),
  });

  const formik = useFormik({
    initialValues: {
      cover: null,
    },
    validationSchema: UploadImages,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        resetForm();
        handleClosePreview();
        setSubmitting(false);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    },
  });

  const { errors, values, touched, handleSubmit, setFieldValue } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue("cover", {
          ...file,
          preview: URL.createObjectURL(file),
        });
        setInput(file);
      }
    },
    [setFieldValue]
  );

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <TextField name="name" label="Product Name" />

                <TextField fullWidth label="Brands name" name="brands" />

                <TextField
                  fullWidth
                  label="Select Category"
                  name="category"
                  select
                  SelectProps={{ native: true }}
                >
                  {category.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  label="Select Currency"
                  name="currency"
                  required
                  select
                  SelectProps={{ native: true }}
                >
                  {currency.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                {/* <Stack spacing={1}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "text.secondary" }}
                >
                  Description
                </Typography>

                <RHFEditor simple name="description" />
              </Stack> */}

                <Stack spacing={1}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary" }}
                  >
                    Images
                  </Typography>
                  <UploadImage
                    multiple
                    maxSize={3145728}
                    accept={{
                      "image/*": [],
                    }}
                    file={values.cover}
                    onDrop={handleDrop}
                    error={Boolean(touched.cover && errors.cover)}
                  />
                  {touched.cover && errors.cover && (
                    <FormHelperText error sx={{ px: 2 }}>
                      {touched.cover && errors.cover}
                    </FormHelperText>
                  )}
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3} mt={2}>
                  <TextField fullWidth label="Weight" name="weight" />
                  <TextField
                    fullWidth
                    label="Delivery Weight"
                    name="delivery_weight"
                    type={"number"}
                  />
                  <TextField
                    fullWidth
                    label="Discount"
                    name="discount"
                    type={"number"}
                  />
                  <TextField
                    fullWidth
                    label="Quantity"
                    name="quantity"
                    type={"number"}
                  />
                </Stack>
              </Card>

              <Card sx={{ p: 3 }}>
                <Stack spacing={3} mb={2}>
                  <TextField
                    name="price"
                    label="Regular Price"
                    placeholder="0.00"
                    onChange={(event) =>
                      setValue("price", Number(event.target.value), {
                        shouldValidate: true,
                      })
                    }
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box component="span" sx={{ color: "text.disabled" }}>
                            $
                          </Box>
                        </InputAdornment>
                      ),
                      type: "number",
                    }}
                  />

                  <TextField
                    name="priceSale"
                    label="Sale Price"
                    placeholder="0.00"
                    onChange={(event) =>
                      setValue("priceSale", Number(event.target.value))
                    }
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box component="span" sx={{ color: "text.disabled" }}>
                            $
                          </Box>
                        </InputAdornment>
                      ),
                      type: "number",
                    }}
                  />
                </Stack>
              </Card>

              <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                //   loading={isSubmitting}
              >
                {"Create Product"}
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
