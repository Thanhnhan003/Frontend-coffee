import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GET_ALL } from '../screens/apiService';

function Categories({ route }) {
  const { cof, categoryId } = route.params;
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    // Sử dụng categoryId để lấy tên danh mục tương ứng từ API hoặc danh sách danh mục
    // Ví dụ: Sử dụng hàm GET_ALL("categories") để lấy danh sách danh mục từ API
    GET_ALL("categories")
      .then((response) => {
        const categories = response.data;
        const category = categories.find((c) => c.id === categoryId);
        if (category) {
          setCategoryName(category.name);
        }
      })
      .catch((error) => {
        console.error("Error fetching category data: ", error);
      });
  }, [categoryId]);

  return (
    <View>
      <Text>Product Name: {cof.name}</Text>
      <Text>Category Name: {categoryName}</Text>
      {/* Các thông tin khác về sản phẩm */}
    </View>
  );
}

export default Categories;
