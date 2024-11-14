import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Outlet, useNavigation } from "react-router-dom";

export default function RootLayout() {
  const { state } = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      {state === "loading" && <Loading />}

      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
