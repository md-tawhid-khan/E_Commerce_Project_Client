'use client';

import Loading from "@/components/loading";

import { AppStore, makeStore } from "@/redux/store";
import {  useState } from "react";
import { Provider } from "react-redux";
import { persistStore, Persistor } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
 const [store] = useState<AppStore>(() => makeStore());
  const [persistor] = useState<Persistor>(() => persistStore(store));
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
