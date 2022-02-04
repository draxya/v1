import { FC } from "react";

export const Main: FC = () => {
return (
<div>
  <div className="flex justify-center items-center mt-20">
    <div className="md:w-7/12 w-10/12 mt-5">
      <div className="md:flex">
        <div className="mb-5 md:mb-0">
          <img src="/icon.png" className="rounded-full border-4 border-gray-800 md:w-auto w-1/2" alt="" />
        </div>
        <div className="md:ml-5">
          <p className="text-5xl font-bold text-gray-100">Mert Doğu</p>
          <p className=" text-fuchsia-400 text-opacity-70 text-xl font-medium">
            Full Stack Developer
          </p>
          <div className="mt-2 flex text-xl text-gray-400 font-semibold">
            <p className="">I'm a full stack developer with over { new Date().getFullYear() - 2019 } years of
              experience<br />
              And a student who spends most all of his free time doing open source projects/websites/softwares.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center items-center w-screen mt-20 bg-[#1f1f1f] py-20">
    <div className="md:flex md:w-7/12 w-10/12 justify-between items-center">
      <div className="md:w-2/3  text-gray-200">
        <p className="text-3xl font-semibold">About Me</p>
        <p className="mt-4 md:w-11/12">
          I've been playing with development since 2019 ({ new Date().getFullYear() - 2019 } years) and although I am a full stack developer, I like front-end more.
        </p>
        <p className="mt-4 md:w-11/12">
          I mainly use Node based technologies. On the right, you can see a couple of my favourite technologies, which
          are also the ones I use in most of my projects.
        </p>
      </div>
      <div className="justify-center md:w-1/2 flex grid grid-cols-2 gap-4 text-gray-200 font-medium md:mt-0 mt-5">
      <div className="flex justify-center">
      <div className="w-full">
              <div className="p-4 rounded-xl bg-[#252525]">
                <div className="w-1/2 rounded-xl bg-green-500 p-4 bg-opacity-20">
                  <svg viewBox="0 0 32 32" fill="#42b983" className="">
                    <path d="m3 6 13 22L29 6H19l-3 5.3L13 6H3zm3.5 2h3.771L16 18l5.729-10H25.5L16 24.1 6.5 8z"></path>
                  </svg>
                </div>
                <p className="mt-2">
                  Vue
                </p>
                <p>
                  Since 2021
                </p>
              </div>
            </div>
    </div>  
    <div className="flex justify-center">
      <div className="w-full">
              <div className="p-4 rounded-xl bg-[#252525]">
                <div className="w-1/2 rounded-xl bg-blue-500 p-4 bg-opacity-20">
                  <svg viewBox="0 0 32 32" fill="#38bdf8" className="">
                  <path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"></path>
                  </svg>
                </div>
                <p className="mt-2">
                  Tailwind
                </p>
                <p>
                  Since 2021
                </p>
              </div>
            </div>
    </div>  
    <div className="flex justify-center">
      <div className="w-full">
              <div className="p-4 rounded-xl bg-[#252525]">
                <div className="w-1/2 rounded-xl bg-blue-400 p-4 bg-opacity-20">
                  <svg viewBox="0 0 32 32" fill="#5ed3f3" className="">
                    <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854S17.573 13.146 16 13.146zm-7.99 8.526-.63-.156C2.692 20.328 0 18.318 0 15.995s2.693-4.333 7.38-5.521l.63-.156.177.625a31.42 31.42 0 0 0 1.818 4.771l.135.281-.135.286a31.047 31.047 0 0 0-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063a33.28 33.28 0 0 1 1.578-4.063 32.958 32.958 0 0 1-1.578-4.063zm16.901 9.74-.177-.625a31.163 31.163 0 0 0-1.818-4.766l-.135-.286.135-.286a31.047 31.047 0 0 0 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677a32.524 32.524 0 0 1 1.578 4.063c3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063a33.663 33.663 0 0 1-1.578 4.063zM7.078 11.927l-.177-.625C5.583 6.656 5.984 3.323 8 2.161c1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464a31.458 31.458 0 0 0-3.229 3.958l-.182.255-.313.026a31.612 31.612 0 0 0-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005a33.343 33.343 0 0 1 4.313-.672 32.828 32.828 0 0 1 2.734-3.391c-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464a31.458 31.458 0 0 0 3.229-3.958l.177-.255.313-.031a30.668 30.668 0 0 0 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135a3.095 3.095 0 0 1-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005a32.644 32.644 0 0 1-4.313.667 32.886 32.886 0 0 1-2.734 3.396zm7.99-13.802-.63-.161a31.993 31.993 0 0 0-5.052-.813l-.313-.026-.177-.255a31.458 31.458 0 0 0-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276a33.22 33.22 0 0 1 4.313.672c.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943a34.067 34.067 0 0 1 2.734 3.391zM9.609 30.234c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255a31.458 31.458 0 0 0 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943a32.886 32.886 0 0 1-2.734-3.396 32.517 32.517 0 0 1-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26a39.947 39.947 0 0 1-1.797-2.828 39.917 39.917 0 0 1-1.557-2.969l-.135-.286.135-.286a40.498 40.498 0 0 1 3.354-5.797l.182-.26.313-.026a39.962 39.962 0 0 1 6.708 0l.313.026.182.26a40.077 40.077 0 0 1 3.354 5.797l.135.286-.135.286a39.62 39.62 0 0 1-3.354 5.797l-.182.26-.313.026a40.483 40.483 0 0 1-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0a39.03 39.03 0 0 0 2.927-5.063 37.53 37.53 0 0 0-2.932-5.063 37.881 37.881 0 0 0-5.854 0 37.302 37.302 0 0 0-2.932 5.063 38.624 38.624 0 0 0 2.932 5.063z"></path>
                  </svg>
                </div>
                <p className="mt-2">
                  React
                </p>
                <p>
                  Since 2020
                </p>
              </div>
            </div>
    </div>  
    <div className="flex justify-center">
      <div className="w-full">
              <div className="p-4 rounded-xl bg-[#252525]">
                <div className="w-1/2 rounded-xl bg-green-500 p-4 bg-opacity-20">
                  <svg viewBox="0 0 256 289" fill="#42b983" className="">
                    <path d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z"></path>
                  </svg>
                </div>
                <p className="mt-2">
                  Node.js
                </p>
                <p>
                  Since 2019
                </p>
              </div>
            </div>
    </div>  
      </div>
    </div>
  </div>
</div>
);
};