import { Application } from 'express';

export interface IServer {
    start(): void;
    getApp(): Application;
}
