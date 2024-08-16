import { FC, PropsWithChildren } from "react";
import Navbar from "@/modules/Navbar";
import { GlobalProvider } from "@/providers/GlobalContext";

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <GlobalProvider>
        <Navbar />
        {children}
      </GlobalProvider>
    </main>
  );
};

export default DefaultLayout;
