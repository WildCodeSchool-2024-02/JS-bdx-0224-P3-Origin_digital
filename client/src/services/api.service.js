export async function sendData(url, data, http) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: http,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Erreur lors de l'envoi des données :", error);
    return null;
  }
}

export async function getData(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Erreur lors de l'envoi des données :", error);
    return null;
  }
}
