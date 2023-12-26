import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const CreateCompanies = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m='20px'>
      <Header title='CREATE NEW Companies' subtitle='' />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0, 1fr))'
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='First Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Last Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name='lastName'
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Alias name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='alias name'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='Adress'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label=' Work From Home Location'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='wfhLocation'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Contact Number'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='phoneP'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Work contact Number'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='phnoeB'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name='email'
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='DOJ'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name='doj'
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Tenure'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='tenure'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Probation Period'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='probation'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Profile'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='profile'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Permanent Employee'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='confirmedEmployee'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Experience in perticular field'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='profileExperience'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Coach'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='coach'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Team Leader'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='teamLeader'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Manager'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='manager'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Shift'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='shift'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Process'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='process'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Refered By'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='referredBy'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Salary Bracket'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='salaryBracket'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Password'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='password'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' color='secondary' variant='contained'>
                Create New hr
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address: yup.string().required("required"),
  // address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default CreateCompanies;
