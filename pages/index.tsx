import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="antialiased">
        <h1 className={`${inter.className} mb-5 text-4xl`}>Hello World</h1>
        <p className={`${inter.className} leading-relaxed`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab vitae quos,
          cupiditate voluptatum accusamus sequi cum architecto laborum minima iusto impedit.
          Corrupti quae accusamus placeat neque voluptatibus laudantium laboriosam ratione quisquam!
          Suscipit repellat illo totam hic non nulla vel pariatur architecto nostrum aliquid
          similique, quaerat quod eligendi quae nam ut aut dicta repellendus in quidem corporis
          exercitationem quas minus ad. Possimus ullam tempore quisquam eius commodi deleniti, ipsa
          enim quo laudantium maxime perspiciatis, facilis ducimus, quibusdam aperiam officia quidem
          consequatur dicta? Repellat obcaecati saepe maxime quo ratione ipsa fugiat reprehenderit
          ab, a quod deleniti vel numquam distinctio reiciendis aliquam?
        </p>
      </main>
    </>
  );
}
