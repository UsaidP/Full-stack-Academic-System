import { Client, Databases, ID } from "appwrite";
import config from "../conf/config.js";
export class databaseServices {
  client = new Client();
  database;
  buckets;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.database = new Databases(this.client);
  }

  async createDocument() {
    try {
      return await this.database.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        ID.unique(),
        {}
      );
    } catch (error) {
      console.error(error);
    }
  }
}
const databaseService = new databaseServices();
export default databaseService;
