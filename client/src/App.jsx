import { useEffect, useState } from "react";
import backgroundImage from "../public/images/bg.jpg";
import CodeCart from "./components/CodeCart";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import scrolldown from "./components/scrolldown.gif";

function App() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    fetch(`http://localhost:3000/verify/${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson.data);
      });
  }, [id]);
  console.log(data);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="">
        <div
          className={`w-full h-full min-h-screen bg-contain bg-center bg-fixed`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div
            className={`w-full h-full min-h-screen bg-contain bg-no-repeat bg-center backdrop-blur-sm bg-fixed`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0"></div>

            {/* BANNER SECTION */}
            <div className="relative z-10">
              <section className="BANNER">
                <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-900 bg-opacity-60 py-12">
                  <div className="text-center">
                    <div className="container px-4 mx-auto">
                      <div className="max-w-4xl mx-auto text-center">
                        <span
                          data-aos="fade-up"
                          data-aos-duration="600"
                          data-aos-delay="1000"
                          className="text-gray-200 font-semibold uppercase tracking-widest"
                        >
                          aigen bootcamp batch 1
                        </span>
                        <div data-aos="zoom-in" data-aos-duration="800" className="flex items-center justify-center">
                          <p className="text-4xl lg:text-5xl -scale-y-100 -rotate-180">🎉</p>
                          <h2 className="mt-8 mb-6 text-4xl lg:text-6xl font-bold text-gray-100">
                            CONGRATULATIONS! 🎉
                          </h2>
                        </div>
                        <p
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          data-aos-delay="1200"
                          className="max-w-4xl mx-auto mb-10 text-xl text-gray-200"
                        >
                          Selamat atas kelulusan Bootcamp! Kalian telah menunjukkan dedikasi dan kerja keras yang luar
                          biasa. Selamat memulai petualangan baru menjadi web developer! Sukses selalu!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-24">
                    <img
                      data-aos="fade-down"
                      data-aos-duration="1000"
                      data-aos-delay="1800"
                      src={scrolldown}
                      alt="gif"
                      className="h-40"
                    />
                  </div>
                </div>
              </section>
              {/* CARD SECTION */}
              <section>
                {/* <CodeCart /> */}
                <div className="flex h-screen items-center justify-center space-y-6 bg-gray-900 bg-opacity-60 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="bg-gray-900 p-1 max-w-7xl w-full rounded-lg shadow-lg duration-300 hover:scale-[1.02]"
                  >
                    <div className="border-b border-gray-800 px-8 py-3">
                      <div className="inline-block w-5 h-5 mr-2 rounded-full bg-red-500"></div>
                      <div className="inline-block w-5 h-5 mr-2 rounded-full bg-yellow-300"></div>
                      <div className="inline-block w-5 h-5 mr-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="w-full py-12 justify-center items-center flex max-w-7xl overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl">
                      <div className="flex flex-col justify-center items-center">
                        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto mt-8 h-28 w-28 text-green-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <h1 className="mt-2 text-center text-4xl font-bold text-gray-500">Valid Certificate</h1>
                          <p className="my-4 text-center text-lg text-gray-500">Congratulations for your graduation!</p>
                        </div>
                        <div className="container p-2 mx-auto rounded-md sm:p-4 text-gray-600">
                          <div className="relative overflow-x-auto">
                            <table className="ml-4 text-lg font-semibold">
                              {/* {data.map((item) => ( */}
                              <tbody
                              // key={item.key}
                              >
                                <tr
                                  data-aos="fade-left"
                                  data-aos-duration="600"
                                  data-aos-delay="1000"
                                  className="text-right border-opacity-20 border-gray-300"
                                >
                                  <td className="px-3 py-2 text-left">
                                    <span>Nama</span>
                                  </td>
                                  <td className="px-3 py-2 text-left">
                                    <span>: {data.Nama}</span>
                                  </td>
                                </tr>
                                <tr
                                  data-aos="fade-right"
                                  data-aos-duration="700"
                                  data-aos-delay="1300"
                                  className="text-right border-opacity-20 border-gray-300"
                                >
                                  <td className="px-3 py-2 text-left">
                                    <span>Program</span>
                                  </td>
                                  <td className="px-3 py-2 text-left">
                                    <span>: {data.Program}</span>
                                  </td>
                                </tr>
                                <tr
                                  data-aos="fade-left"
                                  data-aos-duration="800"
                                  data-aos-delay="1600"
                                  className="text-right border-opacity-20 border-gray-300"
                                >
                                  <td className="px-3 py-2 text-left">
                                    <span>Date</span>
                                  </td>
                                  <td className="px-3 py-2 text-left">
                                    <span>: {data.Tanggal}</span>
                                  </td>
                                </tr>
                                <tr
                                  data-aos="fade-right"
                                  data-aos-duration="900"
                                  data-aos-delay="1900"
                                  className="text-right border-opacity-20 border-gray-300"
                                >
                                  <td className="px-3 py-2 text-left">
                                    <span>Status</span>
                                  </td>
                                  <td className="px-3 py-2 text-left">
                                    <span>: {data.status}</span>
                                  </td>
                                </tr>
                                <tr
                                  data-aos="fade-left"
                                  data-aos-duration="1000"
                                  data-aos-delay="2200"
                                  className="text-right border-opacity-20 border-gray-300"
                                >
                                  <td className="px-3 py-2 text-left">
                                    <span>Certificate</span>
                                  </td>
                                  <td className="px-3 py-2 text-left">
                                    <span>: {data.Certificate}</span>
                                  </td>
                                </tr>
                              </tbody>
                              {/* ))} */}
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <p className="my-5 text-center text-base text-gray-700">Nama : Danu Prasetyo</p>
                    <p className="my-5 text-center text-base text-gray-700">Program : Aigen Bootcamp Fullstack</p>
                    <p className="my-5 text-center text-base text-gray-700">Date : 8 Mei - 8 Juli</p>
                    <p className="my-5 text-center text-base text-gray-700">Status : Lulus</p>
                    <p className="my-5 text-center text-base text-gray-700">Certificate : Valid</p> */}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* {qrCode.map((item) => (
        <div key={item.id}>
          <div>{item.nama}</div>
          <img src={`${item.qrCode}`} alt="qr" />
        </div>
      ))} */}
    </>
  );
}

export default App;
