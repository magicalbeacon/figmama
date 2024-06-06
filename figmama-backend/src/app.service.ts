import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

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

  async generateStory(base64Image: string, componentName: string): Promise<string> {
    // Example prompt for GPT-4 to generate a Storybook story
    const azure = await import('@azure/openai');
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const openaiClient = new azure.OpenAIClient(endpoint, new azure.AzureKeyCredential(apiKey));
    const prompt = `
    Here is an image in base64 format: ${base64Image}.
    Create a Storybook story in React for a component named ${componentName} that uses this image.
    `;

    const response = await openaiClient.getChatCompletions("gpt-4o", [
      {
        "role": "user",
        "content": [
          {"type": "text", "text": `Generate a storybook story in Javascript based on the image with the following name: ${componentName}.stories.js, return only the Javascript text without Markdown.`},
          {
            "type": "image_url",
            imageUrl: {
              "url": `data:image/png;base64,${base64Image}`,
            },
          },
        ],
      }
      ]
    );

    const generatedStory = response.choices[0].message.content;
    console.log(generatedStory)
    return generatedStory;
  }

}
