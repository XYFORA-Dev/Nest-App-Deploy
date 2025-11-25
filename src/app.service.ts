import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {

  getmessage(): string {

    return "Nest.JS App Deployment Vercel";

  };

};