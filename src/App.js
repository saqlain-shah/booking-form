import React from "react";
import Header from "./Components/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "./Components/FormsUI/Textfield";
import Select from "./Components/FormsUI/Select";
import DateTimePicker from "./Components/FormsUI/DataTimePicker";
import Checkbox from "./Components/FormsUI/Checkbox";
import Button from "./Components/FormsUI/Button";
import countries from "./data/countries.json";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const receipt = ["Bank Deposit", "Cash Deposit", "Others"];
const agent = [
  "Khadim",
  "Kazim",
  "Asghar",
  "Ibrahim ",
  "Zaheer ",
  " Ali Naqi",
  "Jawed ",
  "Mujtaba ",
  " Taqi",
  " Not Specify",
];
const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  pnr: "",
  ticket: "",
  to: "",
  from: "",
  issueBy: "",
  ledger: "",
  issueDate: "",
  travelDate: "",
  basicFare: "",
  taxes: "",
  sc: "",
  discount: "",
  totalAmount: "",
  receipt: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  //email: Yup.string().email("Invalid email.").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string(),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string(),
  country: Yup.string().required("Required"),
  issueDate: Yup.date().required("Required"),
  travelDate: Yup.date().required("Required"),
  issueBy: Yup.string().required("Required"),
  to: Yup.string().required("Required"),
  pnr: Yup.string().required("Required"),
  ticket: Yup.number()
    .integer()
    .typeError("Please enter a valid Ticket Number")
    .required("Required"),
  basicFare: Yup.number()
    .integer()
    .typeError("Please enter Basic Fare")
    .required("Required"),
  totalAmount: Yup.number()
    .integer()
    .typeError("Please enter Total Amount")
    .required("Required"),
  from: Yup.string().required("Required"),
  ledger: Yup.string(),
  receipt: Yup.string().required("Required"),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Passenger's details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="firstName" label="First Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last Name" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="email" label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="phone" label="Phone" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="addressLine1" label="Address Line 1" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="addressLine2" label="Address Line 2" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="city" label="City" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="state" label="State" />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Booking information</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="pnr" label="PNR" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="ticket" label="Ticket #" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="to" label="To" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="from" label="From" />
                  </Grid>

                  <Grid item xs={6}>
                    <Select
                      name="issueBy"
                      label="Issue/Process By"
                      options={agent}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="ledger" label="Ledger" />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name="issueDate"
                      label="Ticket Issue/Process Date"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker name="travelDate" label="Date of Travel" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Fare Calculation</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="basicFare" label="Basic Fare " />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="taxes" label="Taxes " />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="sc" label="Sales Commission" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="discount" label="Discount " />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="totalAmount" label="Total Amount " />
                  </Grid>
                  <Grid item xs={6}>
                    <Select
                      name="receipt"
                      label="Payment Method"
                      options={receipt}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label="I agree"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>Confirm Booking</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
