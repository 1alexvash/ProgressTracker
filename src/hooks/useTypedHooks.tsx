// hooks.js
import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "@/store/store";

const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState, useStoreDispatch, useStore };
