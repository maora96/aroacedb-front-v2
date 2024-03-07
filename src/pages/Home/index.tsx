import { Button, Card, Space, Tag, Typography, Image } from "antd";
import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.scss";
import { useGetRandomCharacter } from "../../hooks/characters";
import { matcher } from "../../utils/dictionary";
import { Header } from "../../components/Header";

export function Home() {
  // const { Title, Text } = Typography;

  const { data, refetch } = useGetRandomCharacter();
  console.log(data);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className="w-5/6 h-full p-4 bg-offwhite">
          <div className="flex flex-col items-center bg-offwhite p-6 h-full gap-y-8 overflow-y-auto">
            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-1/2">
              <div className="flex flex-col justify-start p-6 w-full">
                <h5 className="mb-4 text-xl font-medium text-neutral-800 dark:text-neutral-50 uppercase text-center w-full">
                  WELCOME TO THE AROACE DATABASE
                </h5>

                <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-200">
                  Enter a few keywords in the search bar below to find an
                  aromantic or asexual character in the database! These can be
                  orientations (demisexual, grayromantic, etc.), story genres
                  (fantasy, contemporary), or many more—and you can use more
                  than one.
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-200">
                  Not sure what to enter? Check out the About the Database page
                  for the list of categories and terms used, or hit the “Give me
                  a new character” button for inspiration!
                </p>
              </div>
            </div>

            <h4 className="mb-2 text-2xl font-medium text-neutral-800 dark:text-neutral-50 uppercase">
              your random character
            </h4>

            <div className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-1/2">
              <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={data?.cover}
                alt=""
              />
              <div className="flex flex-col justify-start p-6 w-full">
                <div className="flex justify-between">
                  <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 uppercase">
                    {data?.name}
                  </h5>

                  <span>
                    {matcher[data?.gender]}
                    {data?.pairing && ` | ${data.pairing}`}
                  </span>
                </div>
                <span className="text-sm text-darkgray mb-2">
                  by {data?.author}
                  {data?.series && ` | in the ${data?.author} series`}
                </span>
                <div className="mb-2">
                  {data?.genres.map((genre: string) => (
                    <span className="bg-green text-offwhite text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-green uppercase">
                      {matcher[genre]}
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {data?.name} is a {data?.importance} character.
                </p>
                <div className="mt-2">
                  <span className="bg-ace text-offwhite text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-ace uppercase">
                    {data?.sexualOrientation}
                  </span>
                  <span className="bg-aro text-offwhite text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-aro uppercase">
                    {data?.romanticOrientation}
                  </span>
                </div>

                <div className="flex justify-self-end self-end mt-6 gap-x-4">
                  <button
                    type="button"
                    className="text-green bg-darkgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase font-semibold"
                  >
                    books in series
                  </button>
                  <button
                    type="button"
                    className="text-green bg-darkgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase font-semibold"
                  >
                    author
                  </button>
                  <button
                    type="button"
                    className="text-green bg-darkgray shadow-sm sm:text-sm rounded-lg text-sm px-8 py-2.5 uppercase font-semibold"
                  >
                    profile
                  </button>
                </div>
              </div>
            </div>
            {/* <Card
              style={{ width: "50%" }}
              actions={[
                "books in series",
                "author",
                "profile",
                //   <SettingOutlined key="setting" />,
                //   <EditOutlined key="edit" />,
                //   <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div className={styles.card}>
           
                <Image width={150} src={data?.cover} />
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Space
                    style={{
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "start",
                      gap: 0,
                    }}
                  >
                    <Space style={{ gap: 0 }} direction="vertical">
                      <Title level={5} style={{ textTransform: "uppercase" }}>
                        {data?.name}
                      </Title>
                      <Text> by {data?.author}</Text>
                    </Space>
                    <Text type="secondary">
                      {matcher[data?.gender]}
                      {data?.pairing && ` | ${data.pairing}`}
                    </Text>
                  </Space>
                  {data?.series && (
                    <Text type="secondary">in the {data.series} series</Text>
                  )}
                  <Space>
                    {data?.genres.map((genre: string) => (
                      <Tag color="lime" style={{ textTransform: "uppercase" }}>
                        {matcher[genre]}
                      </Tag>
                    ))}
                  </Space>
                  <p>
                    {data?.name} is a {data?.importance} character.
                  </p>
                  <Space>
                    <Tag color="#87d068" style={{ textTransform: "uppercase" }}>
                      {data?.sexualOrientation}
                    </Tag>
                    <Tag color="#87d068" style={{ textTransform: "uppercase" }}>
                      {data?.romanticOrientation}
                    </Tag>
                  </Space>
                </Space>
              </div>
            </Card> */}
            <Space style={{ width: "50%", justifyContent: "flex-end" }}>
              <Button
                type="primary"
                style={{ textTransform: "uppercase" }}
                onClick={() => refetch()}
              >
                give me another!
              </Button>
            </Space>
          </div>
        </main>
      </div>
    </>
  );
}
