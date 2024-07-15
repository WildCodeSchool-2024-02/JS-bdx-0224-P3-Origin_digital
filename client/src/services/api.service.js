export async function sendData(url, data) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return error;
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
    return error;
  }
}

export async function getSecureData(url, token) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}
