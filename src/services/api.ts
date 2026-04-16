const API_URL = "http://localhost:8080" // depois troca pro deploy

export async function getHealth(): Promise<string> {
  const res = await fetch(`${API_URL}/health`)
  return res.text()
}