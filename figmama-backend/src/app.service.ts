import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  async searchOnGithub(query: string) {
    try{
    const octo = await import("octokit")
    const octokit = new octo.Octokit({
        auth: process.env.GITHUB_KEY
      })
    const kit = await octokit.rest.search.code({
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        "Accept": "application/vnd.github+json"
      },
        q: query,
      })

      return JSON.stringify(kit, null, 4)
    }catch(e) {
        console.error(e)
    }
}

}
