import { Body, Controller, Get, Header, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("search")
  async  getSearchResults(@Query("q") query: string): Promise<string> {
    return await this.appService.searchOnGithub(query)
  }

  @Post('create-story')
  async createBranchAndPR(@Body() body: {  componentName: string; base64Png: string; storyTemplate: string }) {
      const { componentName, base64Png, storyTemplate } = body;

      const octo = await import("octokit")
    const octokit = new octo.Octokit({ auth: process.env.GITHUB_KEY });

      const owner = "magicalbeacon"
      const repoName = "figmama"
      const branchName = `add-${componentName}-story`;
      const baseBranch = 'master';  // Adjust according to your repo's default branch

      try {
          const { data: refData } = await octokit.rest.git.getRef({
              owner,
              repo: repoName,
              ref: `heads/${baseBranch}`
          });
          const sha = refData.object.sha;

          await octokit.rest.git.createRef({
              owner,
              repo: repoName,
              ref: `refs/heads/${branchName}`,
              sha
          });

          await this.addFilesToBranch(owner, repoName, branchName, componentName, base64Png, storyTemplate);

          await octokit.rest.pulls.create({
              owner,
              repo: repoName,
              title: `Add ${componentName} story`,
              head: branchName,
              base: baseBranch,
              body: 'This pull request adds a new Storybook story and PNG export for the component.'
          });

          return { message: "Component exported and Storybook story generated" };
      } catch (error) {
        console.error(JSON.stringify(error, null, 4))
          throw new HttpException('Failed to create branch and pull request', HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }

  private async addFilesToBranch(owner: string, repo: string, branch: string, componentName: string, base64Png: string, storyTemplate: string) {
      const pngFilePath = `src/figmama-web/figmama-storybook/${componentName}/${componentName}.png`;
      const storyFilePath = `src/figmama-web/figmama-storybook/${componentName}/${componentName}.stories.js`;

      await this.createFileInRepo(owner, repo, branch, pngFilePath, base64Png);
      await this.createFileInRepo(owner, repo, branch, storyFilePath, Buffer.from(storyTemplate).toString('base64'));
  }

  private async createFileInRepo(owner: string, repo: string, branch: string, path: string, content: string) {
    const octo = await import("octokit")
    const octokit = new octo.Octokit({ auth: process.env.GITHUB_KEY });
      await octokit.rest.repos.createOrUpdateFileContents({
          owner,
          repo,
          path,
          message: `Add ${path}`,
          content,
          branch
      });
  }

  @Post('generate-story')
  @Header("Content-Type", "application/json")
  async generateStory(
    @Body('image') base64Image: string,
    @Body('componentName') componentName: string
  ): Promise<{code: string}> {
    const response = await this.appService.generateStory(base64Image, componentName);
    return { code: response}
  }
}
