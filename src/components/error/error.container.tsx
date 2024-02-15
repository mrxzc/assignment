export function Error(props: any) {
  return (
    <>
      <div className="container my-[200px]">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-2">
            {props?.errorTitle || "Error"}
          </h1>
          {props?.errorMsg}
          {/* {props?.errorMsg ? <h4>{props}</h4> : ""} */}
        </div>
      </div>
    </>
  );
}
