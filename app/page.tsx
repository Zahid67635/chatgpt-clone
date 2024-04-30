import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <section className="bg-gray-800 w-60 h-[100vh] p-3 text-white">
        <button className="w-full p-2 border border-gray-200 rounded bg-transparent">
          + New Chat
        </button>
        <ul className="py-3">
          <li className="list-none"></li>
        </ul>
        <p className="text-sm text-center">@copyright 2024</p>
      </section>
      <section className="bg-gray-700 flex-1 h-[100vh] flex flex-col items-center text-white p-3 justify-between">
        <h1 className="text-2xl">Welcome to the ChatGPT</h1>
        <ul></ul>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="relative max-w-[750px] w-full">
            <input
              type="text"
              className="w-full border-none px-4 py-3 bg-gray-600 rounded-md focus:outline-none shadow-gray-800 shadow-sm text-lg"
            />
            <div className="absolute right-3 bottom-[15px] cursor-pointer text-xl">
              ➢
            </div>
          </div>
          <p className="text-xs text-center text-gray-400 py-2">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </section>
    </main>
  );
}
