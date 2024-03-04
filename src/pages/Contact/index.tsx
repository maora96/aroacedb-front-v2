import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header";

export function Contact() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main className="w-5/6 h-full p-4 bg-offwhite">
          <div className="flex flex-col items-center bg-offwhite p-6 h-full gap-y-8 overflow-y-auto">
            <div className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-1/2">
              <div className="flex justify-between p-4 flex-col">
                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 uppercase">
                  Contact
                </h5>
                <span className="text-sm text-darkgray mb-2">
                  Want to provide further information on a character? Ran into a
                  bug you want to report? Thought of a cool feature you'd want
                  to see (no promise!)? We're always open to suggest and
                  information, so contact us!
                </span>
                [twitter link]
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
