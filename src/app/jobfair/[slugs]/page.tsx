import { getPublishedEvent } from "@assignment/libs/controllers/ebursa/services/ebursa.services";
import { Error } from "@assignment/components";
import { Metadata } from "next";

type Props = {
  params: {
    slugs: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const title = params.slugs?.split("-")?.slice(0, -5)?.join(" ");

  return {
    title: `${title}`,
  };
};

export default async function JobfairDetailPage({
  params,
}: {
  params: { slugs: string };
}) {
  const id = params.slugs?.split("-")?.slice(-5)?.join("-");

  if (!id) {
    return <Error errorMsg="Data tidak ditemukan" />;
  }

  const res = await getPublishedEvent(id);

  if (!res?.data) {
    return (
      <Error errorMsg="Data tidak ditemukan" errorTitle="Tidak ada data" />
    );
  }

  console.log(res, "the res");

  return (
    <>
      <div className="container my-10">
        <h1 className="font-bold text-xl mb-10 mb-5">{res?.data?.title}</h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="flex flex-col space-y-2 mb-6">
              <h6 className="font-medium">Deskripsi</h6>
              <div
                dangerouslySetInnerHTML={{
                  __html: res?.data?.description || "",
                }}
              ></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col space-y-1">
                <h6 className="font-semibold text-md">Code</h6>
                <p className="text-md">{res?.data?.code}</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h6 className="font-semibold text-md">Tipe</h6>
                <p className="text-md">{res?.data?.type}</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h6 className="font-semibold text-md">Total lowongan</h6>
                <p className="text-md">{res?.data?.vacancies_count}</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h6 className="font-semibold text-md">Total pelamar</h6>
                <p className="text-md">{res?.data?.applicants_count}</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h6 className="font-semibold text-md">Total perusahaan</h6>
                <p className="text-md">{res?.data?.companies_count}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-grey-200 rounded-xl p-4">
              <h6 className="font-bold mb-6">Penyelenggara</h6>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col space-y-1">
                  <h6 className="font-medium text-md">Nama penyelenggara</h6>
                  <p className="text-md">{res?.data?.organizer?.name}</p>
                </div>

                <div className="flex flex-col space-y-1">
                  <h6 className="font-medium text-md">Nama PIC</h6>
                  <p className="text-md">{res?.data?.organizer?.pic_name}</p>
                </div>

                <div className="flex flex-col space-y-1">
                  <h6 className="font-medium text-md">Nomor telp</h6>
                  <p className="text-md">{res?.data?.organizer?.pic_mobile}</p>
                </div>

                <div className="flex flex-col space-y-1">
                  <h6 className="font-medium text-md">Website</h6>
                  <p className="text-md">{res?.data?.organizer?.website}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <h1>Hello docs slug</h1> */}
      </div>
    </>
  );
}
