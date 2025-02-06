import Header from "./Layout/Header";



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
const App = () => {
  return (
    <>
      <div className="main w-full bg-black">
        <Header />
      </div>
    </>
  );
};
export default App;
