import { 
  users, 
  type User, 
  type InsertUser, 
  waitlistEntries, 
  type WaitlistEntry, 
  type InsertWaitlistEntry, 
  contactMessages, 
  type ContactMessage, 
  type InsertContactMessage 
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWaitlistEntry(entry: InsertWaitlistEntry & { createdAt: string }): Promise<WaitlistEntry>;
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  createContactMessage(message: InsertContactMessage & { createdAt: string }): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, WaitlistEntry>;
  private contacts: Map<number, ContactMessage>;
  currentUserId: number;
  currentWaitlistId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWaitlistEntry(entry: InsertWaitlistEntry & { createdAt: string }): Promise<WaitlistEntry> {
    // Check if email already exists
    const emailExists = Array.from(this.waitlist.values()).some(
      (existingEntry) => existingEntry.email === entry.email
    );
    
    if (emailExists) {
      throw new Error("Email already registered on the waitlist");
    }
    
    const id = this.currentWaitlistId++;
    const waitlistEntry: WaitlistEntry = { 
      ...entry, 
      id,
    };
    
    this.waitlist.set(id, waitlistEntry);
    return waitlistEntry;
  }

  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlist.values());
  }

  async createContactMessage(message: InsertContactMessage & { createdAt: string }): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const contactMessage: ContactMessage = { 
      ...message, 
      id,
    };
    
    this.contacts.set(id, contactMessage);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
