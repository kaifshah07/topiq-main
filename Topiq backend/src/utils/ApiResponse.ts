import { Response } from "express";

export class ApiResponse<T> {
  constructor(
    private res: Response,
    private statusCode: number,
    private data: T,
    private message = "Success"
  ) {}

  send() {
    return this.res.status(this.statusCode).json({
      success: true,
      message: this.message,
      data: this.data,
    });
  }
}