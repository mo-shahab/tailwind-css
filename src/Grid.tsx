export default function Grid () {

  return (
    <>
      <div className="grid">
        <h1 className="font-semibold text-center">learning grids (equal sections)</h1>
        <div className="grid grid-cols-2 gap-4 m-4">
          <div className="min-h-[200px] rounded-lg shadow bg-yellow-500"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="min-h-[200px] rounded-lg shadow bg-teal-500"></div>
            <div className="min-h-[200px] rounded-lg shadow bg-green-500"></div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="min-h-[100px] rounded-lg shadow bg-red-500"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="min-h-[100px] rounded-lg shadow bg-orange-500"></div>
              <div className="min-h-[100px] rounded-lg shadow bg-orange-500"></div>
            </div>
          </div>
          <div className="min-h-[200x] rounded-lg shadow bg-purple-500"></div>
        </div>
      </div>
      <div className="grid">
        <h1 className="font-semibold text-center">learning grids (not equal sections)</h1>
        <div className="grid grid-cols-12 gap-4 m-4">
          <div className="min-h-[200px] rounded-lg shadow bg-yellow-500 col-span-2"></div>
          <div className="grid grid-rows-2 col-span-10 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="min-h-[100px] rounded-lg shadow bg-teal-500 "></div>
              <div className="min-h-[100px] rounded-lg shadow bg-teal-500 "></div>
            </div>
            <div className="min-h-[100px] rounded-lg shadow bg-indigo-500 "></div>
          </div>
        </div>
        <div className="m-4 grid grid-cols-12 gap-4">
          <div className="min-h-[100px] rounded-lg shadow bg-red-500 col-span-3"></div>
          <div className="min-h-[100px] rounded-lg shadow bg-green-500 col-span-8"></div>
          <div className="min-h-[100px] rounded-lg shadow bg-indigo-500 col-span-1"></div>
        </div>
      </div>
      <div className="grid">
        <h1 className="font-semibold text-center">learning grids (grid-auto-flow 1)</h1>
        <div className="grid grid-flow-col m-4 gap-4">
          <div className="min-h-[200px] rounded-lg shadow bg-red-500 "></div>
          <div className="min-h-[200px] rounded-lg shadow bg-red-500 "></div>
          <div className="grid grid-flow-row gap-4">
            <div className="min-h-[100px] rounded-lg shadow bg-red-500 "></div>
            <div className="min-h-[100px] rounded-lg shadow bg-red-500 "></div>
          </div>
          <div className="min-h-[200px] rounded-lg shadow bg-red-500 "></div>
        </div>
      </div>
      <div className="grid">
        <h1 className="font-semibold text-center">learning grids (grid-auto-flow 2)</h1>
        <div className=" min-h-[700px] m-4 grid grid-flow-col gap-4">
          <div className="grid grid-flow-row gap-4">
            <div className="grid grid-rows-6 gap-4">
              <div className="rounded-lg shadow bg-indigo-500 row-span-2"></div>
              <div className="grid grid-cols-6 row-span-4 gap-4">
                <div className="rounded-lg shadow bg-indigo-500 "></div>
                <div className="rounded-lg shadow bg-indigo-500 col-span-3"></div>
                <div className="rounded-lg shadow bg-indigo-500 col-span-2"></div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className="rounded-lg shadow bg-indigo-500 col-span-2"></div>
              <div className="grid gap-4 col-span-4">
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="rounded-lg shadow bg-indigo-500 "></div>
                  <div className="rounded-lg shadow bg-indigo-500 "></div>
                </div>
                <div className="rounded-lg shadow bg-indigo-500 "></div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row gap-4">
            <div className="rounded-lg shadow bg-indigo-500"></div>
            <div className="grid grid-flow-col gap-4">
              <div className="rounded-lg shadow bg-indigo-500"></div>
              <div className="grid grid-rows-6 gap-4">
                <div className="rounded-lg shadow bg-indigo-500 row-span-2"></div>
                <div className="rounded-lg shadow bg-indigo-500 row-span-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}