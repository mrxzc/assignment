export async function getPublishedEvents() {
  try {
    const res = await fetch(
      `https://ebursa-api-dev.kemnaker.go.id/v1/published-events`
    );

    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch (error) {
    return { error };
  }
}

export async function getPublishedEvent(id: string) {
  try {
    const res = await fetch(
      `https://ebursa-api-dev.kemnaker.go.id/v1/published-events/${id}`
    );

    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch (error) {
    return { error };
  }
}

// export async function getPublishedEvent(id: string) {
//   const res = await fetch(
//     `https://ebursa-api-dev.kemnaker.go.id/v1/published-events/${id}`
//   );
//   return res.json();
// }

// import { useQuery } from "react-query";

// export function getPublishedEvents() {
//   const {
//     data: publishedEvents,
//     error,
//     isLoading,
//     isFetching,
//   } = useQuery(["publishedEvents"], () =>
//     fetch("https://ebursa-api-dev.kemnaker.go.id/v1/published-eventsx", {
//       next: { revalidate: 10 },
//     })
//       .then((res) => res.json())
//       .then((res) => res?.data)
//   );

//   return { publishedEvents, error, isLoading, isFetching };
// }
