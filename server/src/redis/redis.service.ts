import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis, { RedisOptions } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  constructor() {
    const options: RedisOptions = {
      host: 'localhost',
      port: 6379,
      //   password: 'hergfdfggfdg',
      retryStrategy: (times) => Math.min(times * 50, 2000),
    };
    this.client = new Redis(options);
  }

  onModuleInit() {
    this.client.on('connect', () => {
      console.log('Redis client connected');
    });
  }
  onModuleDestroy() {
    this.client.quit();
  }

  async get(key: string): Promise<string> {
    return this.client.get(key);
  }

  async set(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }
}
