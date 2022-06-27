import * as Yup from "yup";

export const LoginValidationSchema = Yup.object({
    name: Yup.string().required("Name is required").trim(),
    password: Yup.string().required("Password is required").min(8),
});

export const signUpValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone Number is required"),
    profession: Yup.string().required("Profession is required"),
    email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password required"),
});
