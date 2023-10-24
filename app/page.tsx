import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Overview } from "@/components/overview";

export default async function Home() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex justify-between items-center">
          <h1 className="w-1/2 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            smile for everyone <br className="hidden sm:inline" />
            「笑顔になれる介護を」
          </h1>
          <p className="w-1/2 text-lg text-muted-foreground">
            Guided by our heartfelt belief in improving Quality of Life (QoL),
            we aim to create a comforting atmosphere where our users and staff
            can live with peace of mind and share smiles. To achieve this, we
            focus on delivering caring and quality services.
          </p>
        </div>
        <Overview />
        {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}
      </section>
    </>
  );
}
