
export async function searchOnGithub(query: string) {
  const response = await fetch(`http://localhost:3000/search?q=${query}+repo:magicalbeacon/figmama+in:file,path`, {
    "method": "GET"
  })
  return await response.json()
}
