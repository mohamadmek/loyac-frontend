import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Logo from "../../assets/images/SplashLogo.png";
import { colors } from "@config";
import { Formik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../services/auth";
import Loading from "../../components/common/Loading";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

const Login = ({ navigation, setToken }) => {
  const [loading, setLoading] = useState(false);
  const submitLogin = async (body, resetForm) => {
    try {
      const result = await loginApi(body);
      if (result.data.result) {
        setToken(result.data.token);
      } else {
        alert(result.data.message);
      }
    } catch (err) {
      console.log("ERROR ", err);
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.logo} source={Logo} />
        <Text style={styles.title}>Let's Connect together</Text>
        {/* Login form using Formik and Yup for validations */}
        <View style={{ paddingHorizontal: 20 }}>
          <Formik
            initialValues={{ email: "test@test.com", password: "test" }}
            onSubmit={(values, { resetForm }) => submitLogin(values, resetForm)}
            validationSchema={SignupSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
              values,
            }) => (
              <View>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  style={styles.input}
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <Text style={styles.textError}>{errors.email}</Text>
                ) : null}
                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  style={styles.input}
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <Text style={styles.textError}>{errors.password}</Text>
                ) : null}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.loginButton}
                >
                  <View>
                    <Text style={styles.loginButtonText}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <Text style={styles.bottomText}>
            Don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Register")}
              style={{ fontWeight: "bold" }}
            >
              Register here!
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    flex: 1,
  },
  logo: {
    width: "60%",
    height: 200,
    alignSelf: "center",
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: colors.header,
    fontSize: 20,
  },
  input: {
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  textError: {
    color: "red",
  },
  loginButton: {
    borderWidth: 2,
    alignItems: "center",
    borderColor: "#fff",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  loginButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
  bottomText: {
    textAlign: "center",
    marginTop: 15,
  },
});
