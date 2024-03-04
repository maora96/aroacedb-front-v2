import { Sidebar } from "../../components/Sidebar";
import styles from "./styles.module.scss";
import { Header } from "../../components/Header";

export function Team() {
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
                  The creator
                </h5>
                <span className="text-sm text-darkgray mb-2">
                  Claudie Arseneault is an asexual and aromantic-spectrum writer
                  of queer fantasy centering platonic relationships. In addition
                  to her own novels, the <em>City of Spires</em> series and{" "}
                  <em>Baker Thief</em>, she edited{" "}
                  <em>Common Bonds: an Aromantic Speculative Anthology</em>
                  and is a founding member of{" "}
                  <a
                    href="http://www.krakencollectivebooks.com/"
                    className="text-lightgreen"
                  >
                    The Kraken Collective
                  </a>
                  , a team of queer specfic self-published writers. Otherwise,
                  Claudie tends to be known for her love of croissants and
                  squids. Find out more on her{" "}
                  <a
                    href="http://claudiearseneault.com/"
                    className="text-lightgreen"
                  >
                    website
                  </a>
                  !
                </span>

                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 uppercase">
                  The database gremlins
                </h5>
                <span className="text-sm text-darkgray mb-2">
                  While the database began as a solo project, it certainly has
                  its share of helpers now. Many authors have submitted their
                  characters, and many others have sent information about
                  missing ones.
                </span>
                <span className="text-sm text-darkgray mb-2">
                  In addition to the occasional helpers, two have been of
                  invaluable help. Massive thanks to fellow author S.L. Dove
                  Cooper (@dovelynnwriter), especially for the early volunteer
                  help, and Marianne D., whose continuous work is invaluable in
                  keeping everything up to date .
                </span>

                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 uppercase">
                  The dev
                </h5>
                <span className="text-sm text-darkgray mb-2">
                  nyphren is writer by night and a web developer by day. Their
                  short story <em>Half a Heart</em> was published in{" "}
                  <em>Common Bonds: an Aromantic Speculative Anthology</em>.
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
