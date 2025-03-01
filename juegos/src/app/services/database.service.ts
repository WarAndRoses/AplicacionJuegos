// filepath: /c:/Users/War/Desktop/AplicacionJuegos/juegos/src/app/services/database.service.ts
import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbInstance: SQLiteDBConnection | undefined;

  constructor() {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    try {
      const db = await CapacitorSQLite.createConnection({
        database: 'app.db',
        version: 1,
        encrypted: false,
        mode: 'no-encryption'
      });

      if (db) {
        this.dbInstance = db;
        await this.dbInstance.open();
        await this.dbInstance.execute(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            email TEXT,
            password TEXT,
            role TEXT
          );
        `);
      }
    } catch (error) {
      console.error('Error al crear la base de datos', error);
    }
  }

  async addUser(username: string, email: string, password: string) {
    if (!this.dbInstance) {
      throw new Error('Database not initialized');
    }
    const role = await this.getUserCount() === 0 ? 'admin' : 'employee';
    const sql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
    const params = [username, email, password, role];
    return this.dbInstance.run(sql, params);
  }

  async getUserCount(): Promise<number> {
    if (!this.dbInstance) {
      throw new Error('Database not initialized');
    }
    const result = await this.dbInstance.query('SELECT COUNT(*) AS count FROM users');
    if (result.values && result.values.length > 0) {
      return result.values[0].count;
    }
    return 0;
  }
}