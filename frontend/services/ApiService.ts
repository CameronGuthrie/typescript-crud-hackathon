import { Task } from '../models/Task';

export class ApiService<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getAll(): Promise<T[]> {
    const response = await fetch(this.baseUrl);
    return response.json();
  }

  // Additional CRUD methods can be added here
}
