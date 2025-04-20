import { 
  users, 
  messages, 
  type User, 
  type InsertUser, 
  type Message, 
  type InsertMessage 
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByDiscordId(discordId: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getMessage(id: number): Promise<Message | undefined>;
  getMessagesByDiscordUserId(discordUserId: string): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, Message>;
  private userIdCounter: number;
  private messageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.userIdCounter = 1;
    this.messageIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByDiscordId(discordId: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.discordId === discordId,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { 
      ...insertUser, 
      id,
      username: insertUser.username || null,
      status: insertUser.status || "unknown"
    };
    this.users.set(id, user);
    return user;
  }
  
  async getMessage(id: number): Promise<Message | undefined> {
    return this.messages.get(id);
  }
  
  async getMessagesByDiscordUserId(discordUserId: string): Promise<Message[]> {
    return Array.from(this.messages.values()).filter(
      (message) => message.discordUserId === discordUserId,
    );
  }
  
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageIdCounter++;
    const message: Message = { 
      ...insertMessage, 
      id, 
      timestamp: new Date(),
      status: insertMessage.status || "pending",
      error: insertMessage.error || null
    };
    this.messages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
