import data from "../services/data.service.js";

const CodeCart = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 items-center justify-center w-full min-h-screen bg-gray-900 bg-opacity-60 px-5 py-5">
        {data.map((item) => (
          <div key={item.id} className="rounded-lg shadow-xl bg-gray-900 text-white w-[450px]">
            <div className="border-b border-gray-800 px-8 py-3">
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
              <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
            </div>
            <div className="px-8 py-6">
              <p>
                <em className="text-blue-400">const</em> <span className="text-green-400">aboutMe</span>{" "}
                <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>() {"{"}
              </p>
              <p>
                &nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-yellow-300">{item.name}</span>,
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;program:{" "}
                <span className="text-yellow-300">'Aigen Bootcamp Fullstack Javascript'</span>,
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Date: <span className="text-yellow-300">'8 Mei - 8 Juli'</span>,
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Status: <span className="text-yellow-300">'Lulus'</span>,
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Certificate: <span className="text-yellow-300">'Valid'</span>,
              </p>
              <p>&nbsp;&nbsp;{"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CodeCart;
