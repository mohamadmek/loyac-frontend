import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, RefreshControl } from "react-native";
import { colors } from "@config";
import Category from "./Category";
import Post from "./Post";
import { getCategories } from "../../services/categories";
import { getPosts, getPostsByID } from "../../services/posts";

const Home = () => {
  const [categoryID, setCategoryID] = useState(null);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const renderCategory = ({ item }) => (
    <Category
      item={item}
      setCategoryID={setCategoryID}
      categoryID={categoryID}
      fetchCategoriesByID={fetchCategoriesByID}
    />
  );
  const renderPosts = ({ item }) => <Post item={item} />;

  // Fetch posts by category
  const fetchCategoriesByID = async (id) => {
    const result = await getPostsByID(id);
    if (result.data.result) {
      setPosts(result.data.data);
    } else {
      setPosts([]);
    }
  };

  // Fetch all categories
  const fetchCategories = async () => {
    const result = await getCategories();
    if (result.data.result) {
      setCategories(result.data.data);
    }
  };

  // On refresh fetchh all products again
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setCategoryID(null);
    fetchPosts();
  }, []);

  // Fetch all Posts
  const fetchPosts = async () => {
    const result = await getPosts();
    if (result.data.result) {
      setPosts(result.data.data);
      setRefreshing(false);
    } else {
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);

  return (
    <View style={{ paddingTop: 10 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 10, paddingBottom: 20 }}
        horizontal
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
      />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{ paddingHorizontal: 10, height: "100%" }}
        data={posts}
        ListEmptyComponent={
          <View style={{ alignSelf: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>No Posts</Text>
          </View>
        }
        renderItem={renderPosts}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
