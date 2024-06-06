

export async function searchOnGithub(query: string) {
  const response = await fetch(`http://localhost:3000/search?q=${query}+repo:magicalbeacon/figmama+in:file,path`, {
    "method": "GET"
  })
  return await response.json()
}

export async function getStorybookComponents() {
    const response = await fetch(`http://localhost:3000/search?q=repo:magicalbeacon/figmama+in:path+path:figmama-web/figmama-storybook+language:js+filename:stories`, {
        "method": "GET"
      })
      const { data }: any = await response.json()
      return mapFilenamesToOnlyComponentName(data)
}

function mapFilenamesToOnlyComponentName(list: any): any[] {
    if(!list["total_count"])
        return []
    return list["items"].map(it => it["name"].split(".")[0]);
}