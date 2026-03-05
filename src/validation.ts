import * as Yup from "yup";

export const employeeSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters."),

  email: Yup.string()
    .trim()
    .required("Email is required")
    .email("Enter a valid email address.")
    .max(100, "Email must be at most 100 characters."),

  // FORCE: ###-###-####
  phone: Yup.string()
    .required("Phone number is required.")
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Phone must be ###-###-####."),

  // FORCE: ###-###-###
  socialInsuranceNumber: Yup.string()
    .required("Social Insurance Number is required.")
    .matches(/^\d{3}-\d{3}-\d{3}$/, "SIN must be ###-###-###."),

  position: Yup.string()
    .trim()
    .required("Job title is required")
    .min(2, "Job title must be at least 2 characters.")
    .max(60, "Job title must be at most 60 characters."),

    salary: Yup.number()
    .typeError("Salary must be a number")
    .required("Salary is required")
    .min(1, "Salary must be at least 1")
    .max(9999999, "Salary cannot exceed 9,999,999"),
    });
