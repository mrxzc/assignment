import { Card, Error } from "@assignment/components";

import { IEbursa } from "@assignment/libs/controllers/ebursa/models/ebursa";
import { getPublishedEvents } from "@assignment/libs/controllers/ebursa/services/ebursa.services";
import Link from "next/link";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Daftar Jobfair`,
  };
};

export default async function JobfairPage() {
  const res = await getPublishedEvents();

  if (!res?.data?.length) {
    return (
      <Error
        errorMsg="Saat ini belum ada data terkait event"
        errorTitle="Tidak ada data"
      />
    );
  }

  return (
    <>
      <div className="container my-10">
        <h1 className="font-semibold text-xl mb-10">Jobfair List Page</h1>
        {res?.data?.map((ebursa: IEbursa) => {
          const link = `/jobfair/${ebursa.title?.replace(/[-_ ]/g, "-")}-${
            ebursa?.id
          }`;
          return (
            <>
              <div className="mb-5">
                <Link href={link}>
                  <Card key={ebursa?.id} ebursa={ebursa} />
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
