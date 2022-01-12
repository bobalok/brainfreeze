import React from "react";

export default function FAQ() {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto text-center justify-center pt-14">
          <h1 className="text-3xl font-bold sm:text-5xl text-white">FAQ's</h1>
          <p className="mt-6 text-gray-300">Frequently Asked Questions</p>
        </div>
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <ul class="space-y-8">
            <li>
              <details class="p-8 bg-gray-100 rounded-lg" open>
                <summary class="text-xl font-medium">
                  <span>Lorem ipsum dolor sit amet?</span>
                </summary>

                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  ipsa impedit rerum adipisci nihil, ab id dolor animi quia
                  nesciunt. Sequi nulla voluptas delectus aspernatur quidem
                  ullam, placeat maxime, nesciunt expedita est minima beatae.
                  Qui nostrum nemo sed. Aliquid, est facilis fuga ipsa
                  asperiores amet nihil harum impedit modi dolor.
                </p>
              </details>
            </li>

            <li>
              <details class="p-8 bg-gray-100 rounded-lg">
                <summary class="text-xl font-medium">
                  <span>Lorem ipsum dolor sit amet?</span>
                </summary>

                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  ipsa impedit rerum adipisci nihil, ab id dolor animi quia
                  nesciunt. Sequi nulla voluptas delectus aspernatur quidem
                  ullam, placeat maxime, nesciunt expedita est minima beatae.
                  Qui nostrum nemo sed. Aliquid, est facilis fuga ipsa
                  asperiores amet nihil harum impedit modi dolor.
                </p>
              </details>
            </li>
            <li>
              <details class="p-8 bg-gray-100 rounded-lg">
                <summary class="text-xl font-medium">
                  <span>Lorem ipsum dolor sit amet?</span>
                </summary>

                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  ipsa impedit rerum adipisci nihil, ab id dolor animi quia
                  nesciunt. Sequi nulla voluptas delectus aspernatur quidem
                  ullam, placeat maxime, nesciunt expedita est minima beatae.
                  Qui nostrum nemo sed. Aliquid, est facilis fuga ipsa
                  asperiores amet nihil harum impedit modi dolor.
                </p>
              </details>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
