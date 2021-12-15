import Head from "next/head";

export default function dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | internet for new generation</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="text-center flex justify-center mx-auto">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl text-white font-extrabold py-20 p-6">
            a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
              betternet
            </span>{" "}
            for new generation
          </h1>
          <p className="text-lg md:text-2xl text-white">
            neutechbd.com is the most unified <br />
            internet service provider <br />
            enterprise grade solution
            <br />
            everywhere.
          </p>
          <div className="px-8 p-4">
            <button className="bg-green-500 hover:bg-gradient-to-r from-green-500 to-blue-500 transition-all text-white font-semibold hover:text-white py-4 px-4 border border-green-500 hover:border-transparent rounded inline-flex items-center">
              Get started
            </button>
            <span className="mx-1 text-white">or</span>
            <button className="bg-transparent hover:bg-gradient-to-r from-green-500 to-blue-500 transition-all text-green-500 font-semibold hover:text-white py-4 px-4 border border-green-500 hover:border-transparent rounded inline-flex items-center">
              Try free!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
