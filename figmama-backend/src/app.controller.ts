import { Controller, Get, Query } from '@nestjs/common';
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
}
