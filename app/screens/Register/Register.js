import React, { loading, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Logo from "../../assets/images/SplashLogo.png";
import { colors } from "@config";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerApi } from "../../services/auth";
import Loading from "../../components/common/Loading";

// Validations for form
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? <Loading /> : null}

      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.logo} source={Logo} />
        <Text style={styles.title}>You are one step far!</Text>

        {/* Login form using Formik and Yup for validations */}
        <View style={{ paddingHorizontal: 20 }}>
          <Formik
            initialValues={{ email: "", password: "", name: "" }}
            onSubmit={async (values, { resetForm }) => {
              try {
                setLoading(true);
                const result = await registerApi(values);
                if (result.data.result) {
                  resetForm();
                  alert(result.data.message);
                  setLoading(false);
                } else {
                  alert(result.data.message);
                  setLoading(false);
                }
              } catch (err) {
                alert(err);
                setLoading(false);
              }
            }}
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
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  style={styles.input}
                  placeholder="Name"
                />
                {errors.name && touched.name ? (
                  <Text style={styles.textError}>{errors.name}</Text>
                ) : null}
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
                  secureTextEntry
                />
                {errors.password && touched.password ? (
                  <Text style={styles.textError}>{errors.password}</Text>
                ) : null}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.loginButton}
                >
                  <View>
                    <Text style={styles.loginButtonText}>register</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <Text style={styles.bottomText}>
            Already have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{ fontWeight: "bold" }}
            >
              Login here!
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Register;

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
