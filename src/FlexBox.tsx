function getRandom() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

export default function FlexBox() {
  return (
    <>
      <div>
        <h1 className="font-semibold text-center">learning flex (basis)</h1>
        <div className="m-4 flex flex-row gap-4">
          <div className="min-h-[100px] rounded-lg shadow basis-1/4" style={{ backgroundColor: getRandom() }}></div>
          <div className="min-h-[100px] rounded-lg shadow basis-1/2" style={{ backgroundColor: getRandom() }}></div>
          <div className="min-h-[100px] rounded-lg shadow basis-1/4" style={{ backgroundColor: getRandom() }}></div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-center">learning flex (flex wrap)</h1>
        <div className="m-4 flex gap-4 flex-wrap justify-center">
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">01</h2>
          </div>
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">02</h2>
          </div>
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">03</h2>
          </div>
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">04</h2>
          </div>
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">05</h2>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-center">learning flex (flex nowrap)</h1>
        <div className="m-4 flex gap-4 flex-wrap-reverse justify-center">
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">01</h2>
          </div>
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">02</h2>
          </div>
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">03</h2>
          </div>
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">04</h2>
          </div>
          <div className="min-h-[100px] min-w-[300px] rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">05</h2>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-center">learning flex (flex grow)</h1>
        <div className="m-4 flex gap-4 flex-wrap-reverse justify-center">
          <div className="grow-0 w-64 h-64 rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">01</h2>
          </div>
          <div className="grow h-64 rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">02</h2>
          </div>
          <div className="flex-none w-64 h-64 rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <h2 className="m-2 items-center font-bold">03</h2>
          </div>
        </div>
      </div>
    </>
  );
}
