import { ReactNode } from "react";

import { AuthProvider } from "./AuthProvider";
import RoutesProvider from "./RoutesProvider";
import StyleProvider from "./StyleProvider";
import QueryProvider from "./QueryProvider";

interface ProvidersProps {
  children?: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }: any) => {
  return (
    <QueryProvider>
      <StyleProvider>
        <AuthProvider>
          <RoutesProvider />
          {children}
        </AuthProvider>
      </StyleProvider>
    </QueryProvider>
  );
};

export default Providers;
