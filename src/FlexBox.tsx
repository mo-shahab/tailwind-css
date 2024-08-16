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
      <div>
        <h1 className="font-semibold text-center">learning flex (flex wrap with text)</h1>
        <div className="m-4 flex flex-wrap">
          <div className="rounded-lg shadow" style={{ backgroundColor: getRandom() }}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
              consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
              venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
              viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
              vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
              semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
              odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
              tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue
              velit cursus nunc,
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
