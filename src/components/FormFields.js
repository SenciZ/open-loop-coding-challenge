import React, { useRef } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

function FormFields({ updateHandler }) {
  const firstNameEl = useRef(null);
  console.log(Yup);

  return (
    <Formik
      // This component uses useFormik and Context under the hood to connect the Form, Field and ErrorMessage components
      initialValues={{
        firstName: "",
        lastName: "",
        userEmail: "",
        userNote: "",
        isSubmitting: true,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Your first name is required."),
        lastName: Yup.string().required("Your last name is required."),
        userEmail: Yup.string()
          .email("Please enter correct email format.")
          .required("Your email is required"),
        userNote: Yup.string().required("A note is required."),
      })}
      onSubmit={(values, onSubmitProps) => {
        //Updates state in FormContainer to include new object
        updateHandler(values);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        firstNameEl.current.focus();
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div className="inputFieldContainer">
            <label htmlFor="firstName">First Name</label>
            <Field
              innerRef={firstNameEl}
              autoFocus={true}
              name="firstName"
              type="text"
              className={
                formik.touched.firstName && formik.errors.firstName
                  ? "invalid"
                  : null
              }
            />
            <span className="errorMessage">
              <ErrorMessage name="firstName" />
            </span>
          </div>
          <div className="inputFieldContainer">
            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              type="text"
              className={
                formik.touched.lastName && formik.errors.lastName
                  ? "invalid"
                  : null
              }
            />
            <span className="errorMessage">
              <ErrorMessage name="lastName" />
            </span>
          </div>
          <div className="inputFieldContainer">
            <label htmlFor="userEmail">Email</label>
            <Field
              name="userEmail"
              type="email"
              className={
                formik.touched.userEmail && formik.errors.userEmail
                  ? "invalid"
                  : null
              }
            />
            <span className="errorMessage">
              <ErrorMessage name="userEmail" />
            </span>
          </div>
          <div className="inputFieldContainer">
            <label htmlFor="userNote">Note</label>
            <Field
              name="userNote"
              type="text"
              className={
                formik.touched.userNote && formik.errors.userNote
                  ? "invalid"
                  : null
              }
            />
            <span className="errorMessage">
              <ErrorMessage name="userNote" />
            </span>
          </div>
          <button
            type="submit"
            disabled={
              !formik.isValid ||
              formik.isSubmitting ||
              formik.values.firstName === ""
            }
          >
            + Add User
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormFields;
