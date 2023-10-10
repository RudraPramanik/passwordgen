// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { useState } from 'react';

// import BouncyCheckbox from 'react-native-bouncy-checkbox';

// import * as Yup from 'yup';
// import { Formik } from 'formik';

// const PasswordSchema = Yup.object().shape({
//   passwordLength: Yup.number()
//     .min(4, 'Should be min of 4 characters')
//     .max(16, 'Should be max of 16 characters')
//     .required('Length is required'),
// });
// export default function App() {
//   const [password, setPassword] = useState('');
//   const [isPassGenerated, setIsPassGenerated] = useState(false);

//   const [lowerCase, setLowerCase] = useState(true);
//   const [upperCase, setupperCase] = useState(false);
//   const [numbers, setNumbers] = useState(false);
//   const [symbols, setSymbols] = useState(false);

//   const generatePasswordString = (passwordLength: number) => {
//     let characterList = '';

//     const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const digitChars = '0123456789';
//     const specialChars = '!@#$%^&*()_+';

//     if (upperCase) {
//       characterList += upperCaseChars;
//     }
//     if (lowerCase) {
//       characterList += lowerCaseChars;
//     }
//     if (numbers) {
//       characterList += digitChars;
//     }
//     if (symbols) {
//       characterList += specialChars;
//     }

//     const passwordResult = createPassword(characterList, passwordLength);

//     setPassword(passwordResult);
//     setIsPassGenerated(true);
//   };

//   const createPassword = (characters: string, passwordLength: number) => {
//     let result = '';
//     for (let i = 0; i < passwordLength; i++) {
//       const characterIndex = Math.round(Math.random() * characters.length);
//       result += characters.charAt(characterIndex);
//     }
//     return result;
//     console.log('rp');
//   };

//   const resetPasswordState = () => {
//     setPassword('');
//     setIsPassGenerated(false);
//     setLowerCase(true);
//     setupperCase(false);
//     setNumbers(false);
//     setSymbols(false);
//   };

//   return (
//     <ScrollView keyboardShouldPersistTaps="handled">
//       <SafeAreaView style={styles.appContainer}>
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Password Generator</Text>
//           <Formik
//             initialValues={{ passwordLength: '' }}
//             validationSchema={PasswordSchema}
//             onSubmit={(values) => {
//               console.log(values);
//               generatePasswordString(+values.passwordLength);
//             }}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               isValid,
//               handleChange,
//               handleSubmit,
//               handleReset,
//             }) => (
//               <>
//                 <View style={styles.inputWrapper}>
//                   <View style={styles.inputColumn}>
//                     <Text style={styles.heading}>Password Length</Text>
//                     {touched.passwordLength && errors.passwordLength && (
//                       <Text style={styles.errorText}>
//                         {errors.passwordLength}
//                       </Text>
//                     )}
//                   </View>
//                   <TextInput
//                     style={styles.inputStyle}
//                     value={values.passwordLength}
//                     onChangeText={handleChange('passwordLength')}
//                     placeholder="Ex. 8"
//                     keyboardType="numeric"
//                   />
//                 </View>
//                 <View style={styles.inputWrapper}>
//                   <Text style={styles.heading}>Include lowercase</Text>
//                   <BouncyCheckbox
//                     disableBuiltInState
//                     isChecked={lowerCase}
//                     onPress={() => setLowerCase(!lowerCase)}
//                     fillColor="#29AB87"
//                   />
//                 </View>
//                 <View style={styles.inputWrapper}>
//                   <Text style={styles.heading}>Include Uppercase letters</Text>
//                   <BouncyCheckbox
//                     disableBuiltInState
//                     isChecked={upperCase}
//                     onPress={() => setupperCase(!upperCase)}
//                     fillColor="#FED85D"
//                   />
//                 </View>
//                 <View style={styles.inputWrapper}>
//                   <Text style={styles.heading}>Include Numbers</Text>
//                   <BouncyCheckbox
//                     disableBuiltInState
//                     isChecked={numbers}
//                     onPress={() => setNumbers(!numbers)}
//                     fillColor="#C9A0DC"
//                   />
//                 </View>
//                 <View style={styles.inputWrapper}>
//                   <Text style={styles.heading}>Include Symbols</Text>
//                   <BouncyCheckbox
//                     disableBuiltInState
//                     isChecked={symbols}
//                     onPress={() => setSymbols(!symbols)}
//                     fillColor="#FC80A5"
//                   />
//                 </View>
//                 <View style={styles.formActions}>
//                   <TouchableOpacity
//                     disabled={!isValid}
//                     style={styles.primaryBtn}
//                     onPress={handleSubmit}
//                   >
//                     <Text style={styles.primaryBtnTxt}>Generate Password</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     style={styles.secondaryBtn}
//                     onPress={() => {
//                       handleReset();
//                       resetPasswordState();
//                     }}
//                   >
//                     <Text style={styles.secondaryBtnTxt}>Reset</Text>
//                   </TouchableOpacity>
//                 </View>
//               </>
//             )}
//           </Formik>
//         </View>
//         {isPassGenerated ? (
//           <View style={[styles.card, styles.cardElevated]}>
//             <Text style={styles.subTitle}>Result:</Text>
//             <Text style={styles.description}>Long Press to copy</Text>
//             <Text selectable={true} style={styles.generatedPassword}>
//               {password}
//             </Text>
//           </View>
//         ) : null}
//       </SafeAreaView>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//   },
//   formContainer: {
//     margin: 8,
//     padding: 8,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: '600',
//     marginBottom: 15,
//   },
//   subTitle: {
//     fontSize: 26,
//     fontWeight: '600',
//     marginBottom: 2,
//   },
//   description: {
//     color: '#758283',
//     marginBottom: 8,
//   },
//   heading: {
//     fontSize: 15,
//   },
//   inputWrapper: {
//     marginBottom: 15,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//   },
//   inputColumn: {
//     flexDirection: 'column',
//   },
//   inputStyle: {
//     padding: 8,
//     width: '30%',
//     borderWidth: 1,
//     borderRadius: 4,
//     borderColor: '#16213e',
//   },
//   errorText: {
//     fontSize: 12,
//     color: '#ff0d10',
//   },
//   formActions: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   primaryBtn: {
//     width: 120,
//     padding: 10,
//     borderRadius: 8,
//     marginHorizontal: 8,
//     backgroundColor: '#5DA3FA',
//   },
//   primaryBtnTxt: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: '700',
//   },
//   secondaryBtn: {
//     width: 120,
//     padding: 10,
//     borderRadius: 8,
//     marginHorizontal: 8,
//     backgroundColor: '#CAD5E2',
//   },
//   secondaryBtnTxt: {
//     textAlign: 'center',
//   },
//   card: {
//     padding: 12,
//     borderRadius: 6,
//     marginHorizontal: 12,
//   },
//   cardElevated: {
//     backgroundColor: '#ffffff',
//     elevation: 1,
//     shadowOffset: {
//       width: 1,
//       height: 1,
//     },
//     shadowColor: '#333',
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   generatedPassword: {
//     fontSize: 22,
//     textAlign: 'center',
//     marginBottom: 12,
//     color: '#000',
//   },
// });

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be minimum of 4 charecter')
    .max(14, 'should be max of 14 charecter')
    .required('length is requred'),
});
export default function App() {
  const [password, setPassword] = useState('');
  const [isPassgenereated, setIspassGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbal, setSymbal] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charecterList = '';
    const uppperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digiChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';
    if (uppercase) charecterList += uppercase;
    if (lowercase) {
      charecterList += lowercase;
    }
    if (number) {
      charecterList += number;
    }
    if (symbal) {
      charecterList += symbal;
    }

    const passwordResult = createPassword(charecterList, passwordLength);
    setPassword(passwordResult);
    setIspassGenerated(true);
  };

  const createPassword = (charecters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charecterIndex = Math.round(Math.random() * charecters.length);
      result += charecters.charAt(charecterIndex);
    }
    return result;
  };
  const resetPasswordState = () => {
    setPassword('');
    setIspassGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumber(false);
    setSymbal(false);
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>password generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              generatePasswordString(+values.passwordLength);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 10"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>include lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>include uppercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>include number</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>include symbal</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbal}
                    onPress={() => setSymbal(!symbal)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {isPassgenereated ? (
            <View style={[styles.card, styles.cardElevated]}>
              {' '}
              <Text style={styles.subTitle}> result:</Text>
              <Text style={styles.description}>Long press to copy</Text>
              {/* <Text style={styles.generatedPassword}>{password}</Text> */}
            </View>
          ) : (
            <View>
              <Text>no test </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});
