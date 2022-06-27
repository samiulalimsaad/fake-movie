import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import useTitle from "../../components/utils/useTitle";
import { LoginValidationSchema } from "../../components/utils/validator";

interface loginInterface {
    name: string;
    password: string;
}

const initialValue = {
    name: "",
    password: "",
};

const Login = () => {
    useTitle("Login");

    const router = useRouter();

    const createUser = (values: loginInterface) => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

        console.log(userInfo);
        if (
            userInfo?.name === values.name &&
            userInfo?.password === values.password
        ) {
            localStorage.setItem("auth", "true");
            router.push("/");
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <section className="flex items-center justify-center p-4 sm:container sm:p-20">
            <Formik
                onSubmit={createUser}
                validationSchema={LoginValidationSchema}
                initialValues={initialValue}
            >
                {() => (
                    <Form className="sm:w-1/3">
                        <div className="p-4 px-8 pt-6 pb-8 mb-4 bg-white border rounded-md shadow-md border-slate-500">
                            <div className="mb-4 form-control">
                                <label
                                    className="block mb-2 text-sm font-bold text-slate-700"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <Field
                                    className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-slate-700 focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                />
                                <ErrorMessage
                                    className="text-error"
                                    name="name"
                                    component="div"
                                />
                            </div>
                            <div className="mb-6 form-control">
                                <label
                                    className="block mb-2 text-sm font-bold text-slate-700"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <Field
                                    className="w-full px-3 py-2 mb-3 leading-tight border rounded shadow appearance-none border-slate-500 text-slate-700 focus:outline-none focus:shadow-outline "
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                />
                                <ErrorMessage
                                    className="text-error"
                                    name="password"
                                    component="div"
                                />
                            </div>
                            <div className="space-y-4 form-control">
                                <button
                                    className="w-full px-4 py-2 font-bold bg-teal-300 rounded hover:text-white text-slate-700 hover:bg-teal-700 focus:outline-none focus:shadow-outline disabled:bg-teal-800"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="flex items-center justify-center mt-4">
                                <p>Don&apos;t have an account? please</p>
                                <Link href="/signup" passHref>
                                    <a className="ml-1 text-sky-600">signup</a>
                                </Link>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default Login;
