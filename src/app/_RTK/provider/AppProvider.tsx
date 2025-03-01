"use client";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { SyncLoader } from "react-spinners";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="bg-black/20 w-screen h-screen flex justify-center items-center absolute">
            <SyncLoader color="white" />
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;
