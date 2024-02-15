"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <div className="container my-[200px]">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-2">Error</h1>
          <h4>{error?.message || "Gagal mangambil data"}</h4>
        </div>
      </div>
    </>
  );
}
