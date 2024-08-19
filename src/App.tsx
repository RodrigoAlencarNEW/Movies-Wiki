import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import { Outlet, Link } from "react-router-dom";
 

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full min-h-screen overflow-x-hidden flex justify-center">
        <div className="max-w-[100rem] pb-[6rem] flex flex-col w-full">
          <div className="text-primary  flex p-4 banner-gradient ">
            <div className="flex w-[90%] justify-between items-center m-auto flex-wrap">
              <Link
                to={"/"}
                className="transition-all font-bold hover:text-primary text-[2rem]">
                WikiMovie
              </Link>
              <Navbar />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
