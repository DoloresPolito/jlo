export async function sendEmail(data) {
    const apiEndpoint = '/api/email';
  
    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
      });
  
      const response = await res.json();
  
      if (!res.ok) {
        throw new Error(response.error || "Error enviando el correo");
      }
  
      return response; // ⬅️ Devolvemos la respuesta al componente
    } catch (err) {
      throw err;
    }
  }