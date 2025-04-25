// src/hooks/useRemoveItem.js
import { useDispatch } from "react-redux";

export const useRemoveItem = (apiAction, successAction) => {
  const dispatch = useDispatch();

  const removeItem = async (itemId) => {
    const response = await dispatch(apiAction(itemId));
    if (response?.payload?.success) {
      dispatch(successAction(itemId));
    }
  };

  return removeItem;
};
