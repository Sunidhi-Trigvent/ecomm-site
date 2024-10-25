import React from "react";
import axios from "axios";
import { useMutation } from "react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { request } = useAuth();

  const {
    mutateAsync: addToCart,
    isLoading,
    isError,
  } = useMutation(async (cartData) => {
    const response = await request.post("/cart", cartData);
    return response.data;
  });

  return {
    addToCart,
    isLoading,
    isError,
  };
};

export default useCart;
