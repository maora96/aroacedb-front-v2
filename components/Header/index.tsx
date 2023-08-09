import { Button, Input } from "antd";
import { Space } from "antd";
import styles from "./styles.module.scss";
// import { useGetSearchedCharacter } from "../../hooks/characters";
// import { useState } from "react";
// import { IGetSearchedCharacters } from "../../types";
import { useNavigate } from "react-router-dom";

export function Header() {
  //   const [filters, setFilters] = useState<IGetSearchedCharacters>({
  //     search: undefined,
  //     amount: 20,
  //     page: 1,
  //   });
  const navigate = useNavigate();
  const { Search } = Input;

  //   const { data } = useGetSearchedCharacter(filters);

  const onSubmit = (data: string) => {
    // setFilters(prev => {...prev, search: e})
    // console.log(data);
    // setFilters((prev: any) => ({ ...prev, search: data }));
    navigate(`/results?search=${data}`);
  };

  return (
    <header className="w-full h-40 flex border border-lightgreen">
      <div className="w-1/6 flex flex-col justify-center items-center gap-y-2">
        {/* <div className={styles.tag}>
          <Button type="primary">The AroAce Database</Button>
        </div> */}
        <button
          type="button"
          className="text-darkgray bg-lightestgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase border border-lightgreen font-semibold"
        >
          The AroAce Database
        </button>
        <nav className="text-xs flex gap-x-2 uppercase text-green font-medium">
          <a href="">The database</a>
          <a href="">The team</a>
          <a href="">Contact</a>
        </nav>
      </div>
      <div className="w-5/6 border-l border-l-lightgreen">
        {/* <div className={styles.search}> */}
        <div
          className="h-2/3 flex items-center px-8 gap-x-4 w-full border-b border-b-lightgreen"
          // style={{
          //   width: "100%",
          //   height: "100%",
          //   justifyContent: "space-between",
          //   padding: "0 2rem",
          //   display: "flex",
          //   alignItems: "center",
          //   gap: "1rem",
          // }}
        >
          {/* <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for characters or authors"
          /> */}
          <div className="relative w-3/4 ">
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-lg border-green border border-solid py-2.5 pe-10 shadow-sm sm:text-sm outline-lightgreen p-2"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#3F3F44"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
          {/* <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="middle"
            onSearch={onSubmit}
            // width={500}
            // className={styles.bar}
            // style={{ flex: "max-content" }}
          /> */}

          <div className="flex w-1/4 items-center gap-x-4">
            <button
              type="button"
              className="text-green bg-darkgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase font-semibold"
            >
              Suggest a character
            </button>
            <button
              type="button"
              className="text-green bg-lightestgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase border border-lightgreen"
            >
              Admin
            </button>
            {/* <Button type="primary">Suggest a character</Button> */}
            {/* <Button>Admin</Button> */}
          </div>
        </div>
        {/* </div> */}
        <div className="h-1/3 flex justify-evenly items-center">
          {/* <Space
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        > */}

          <button
            type="button"
            className="text-darkgray bg-lightestgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase border border-lightgreen font-semibold"
          >
            All aromantic characters
          </button>
          <button
            type="button"
            className="text-darkgray bg-lightestgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase border border-lightgreen font-semibold"
          >
            All asexual characters
          </button>
          <button
            type="button"
            className="text-darkgray bg-lightestgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase border border-lightgreen font-semibold"
          >
            Canon aromantic characters
          </button>
          <button
            type="button"
            className="text-darkgray bg-lightestgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase border border-lightgreen font-semibold"
          >
            Canon asexual characters
          </button>
          {/* <Button type="primary" style={{ textTransform: "uppercase" }}>
            All aromantic characters
          </Button>
          <Button type="primary" style={{ textTransform: "uppercase" }}>
            All asexual characters
          </Button>
          <Button type="primary" style={{ textTransform: "uppercase" }}>
            Canon aromantic characters
          </Button>
          <Button type="primary" style={{ textTransform: "uppercase" }}>
            Canon asexual characters
          </Button> */}
        </div>
      </div>
    </header>
    // <header className={styles.header}>
    //   <div className={styles.branding}>
    //     <div className={styles.tag}>
    //       <Button type="primary">The AroAce Database</Button>
    //     </div>
    //     <nav>
    //       <a href="">The database</a>
    //       <a href="">The team</a>
    //       <a href="">Contact</a>
    //     </nav>
    //   </div>
    //   <div className={styles.content}>
    //     {/* <div className={styles.search}> */}
    //     <div
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         justifyContent: "space-between",
    //         padding: "0 2rem",
    //         display: "flex",
    //         alignItems: "center",
    //         gap: "1rem",
    //       }}
    //     >
    //       <Search
    //         placeholder="input search text"
    //         allowClear
    //         enterButton="Search"
    //         size="middle"
    //         onSearch={onSubmit}
    //         width={500}
    //         // className={styles.bar}
    //         style={{ flex: "max-content" }}
    //       />

    //       <Space>
    //         <Button type="primary">Suggest a character</Button>
    //         <Button>Admin</Button>
    //       </Space>
    //     </div>
    //     {/* </div> */}
    //     <Space
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         justifyContent: "space-evenly",
    //       }}
    //     >
    //       <Button type="primary" style={{ textTransform: "uppercase" }}>
    //         All aromantic characters
    //       </Button>
    //       <Button type="primary" style={{ textTransform: "uppercase" }}>
    //         All asexual characters
    //       </Button>
    //       <Button type="primary" style={{ textTransform: "uppercase" }}>
    //         Canon aromantic characters
    //       </Button>
    //       <Button type="primary" style={{ textTransform: "uppercase" }}>
    //         Canon asexual characters
    //       </Button>
    //     </Space>
    //   </div>
    // </header>
  );
}
