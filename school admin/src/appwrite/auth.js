import { Client, Account, ID } from "appwrite";
import config from "../conf/config.js";

export class AuthService {
  client = new Client();
  account = null;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);

    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        throw new Error("The account is already created");
      }
    } catch (error) {
      console.error("Failed to create account", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to login");
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error(error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("Failed to logout", error);
    }
  }

  async deleteAccount() {
    try {
      return await this.account.delete();
    } catch (error) {
      console.error("Failed to delete account", error);
    }
  }
}
const authService = new AuthService();

export default authService;
