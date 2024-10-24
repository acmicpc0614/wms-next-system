import toast from "react-hot-toast";

async function appFetch(
  route: string,
  options?: RequestInit,
) {
  try {
    const response = await fetch(route, {
      ...options,
      credentials: "include",
    });

    if (response.status === 404) {
      toast.error("Not found");
      return { notFound: true };
    }
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      // Si la réponse n'est pas OK, traitez toujours comme du JSON pour obtenir le message d'erreur
      const responseData = await response.json();
      console.error("Failed to fetch data for route:", route);
      console.error("Error message:", responseData);
      toast.error(responseData.message);
      return null;
    }
  } catch (error) {
    console.log(error);
    toast.error("An error occured");

    return null;
  }
}

export default appFetch;