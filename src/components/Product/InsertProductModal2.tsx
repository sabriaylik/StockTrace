import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller, FieldValues, SubmitHandler } from 'react-hook-form';

// Doğrulama kuralları burada tanımlanır
const validationRules = {
  name: {
    required: "İsim gerekli",
    minLength: { value: 2, message: "İsim en az 2 karakter olmalı" },
  },
  email: {
    required: "Email gerekli",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Geçerli bir email adresi girin"
    },
  },
  age: {
    required: "Yaş gerekli",
    min: { value: 18, message: "Yaşınız 18'den küçük olamaz" },
    pattern: {
      value: /^[0-9]+$/,
      message: "Geçerli bir yaş girin"
    },
  },
  weight: {
    required: "Kilo gerekli",
    pattern: {
      value: /^[0-9]+(\.[0-9]+)?$/,  // Ondalık sayılar için regex
      message: "Geçerli bir kilo girin (nokta ile ayrılmış ondalık sayı olmalı)"
    },
  },
};

type FormData = {
  name: string;
  email: string;
  age: string;
  weight: string;
};

const InsertProductModal2: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);  // Form verilerini işleme
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcı Bilgileri</Text>

      {/* Name Field */}
      <Text>İsim</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="İsim girin"
          />
        )}
        name="name"
        rules={validationRules.name}  // validationRules'dan alındı
        defaultValue=""
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

      {/* Email Field */}
      <Text>Email</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email adresi girin"
          />
        )}
        name="email"
        rules={validationRules.email}  // validationRules'dan alındı
        defaultValue=""
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      {/* Age Field */}
      <Text>Yaş</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
            placeholder="Yaşınızı girin"
          />
        )}
        name="age"
        rules={validationRules.age}  // validationRules'dan alındı
        defaultValue=""
      />
      {errors.age && <Text style={styles.errorText}>{errors.age.message}</Text>}

      {/* Weight Field */}
      <Text>Kilo (kg)</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
            placeholder="Kilonuzu girin"
          />
        )}
        name="weight"
        rules={validationRules.weight}  // validationRules'dan alındı
        defaultValue=""
      />
      {errors.weight && <Text style={styles.errorText}>{errors.weight.message}</Text>}

      {/* Submit Button */}
      <Button title="Gönder" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default InsertProductModal2;
