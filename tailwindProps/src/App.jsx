import Card from "./components/Card";

/* eslint-disable no-unused-vars */
export default function App() {
  const username1 = "Nadeem Ahmad";
  const username2 = "Ham";
  const myObj = {
    user: "Rexon",
    age: 21,
  };
  const myArr = [1, 2, 3];

  return (
    <>
      <h1 className="grid place-content-center text-3xl font-bold underline bg-slate-500 mb-4">
        Hello world!
      </h1>
      <Card user={myObj.user} />
      <Card Btn={myArr} />
    </>
  );
}
