import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tgcdzgbjaiaanktxrjth.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnY2R6Z2JqYWlhYW5rdHhyanRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDg0MDUsImV4cCI6MjA0MzM4NDQwNX0.Zx8UIDlJq38rbL4Mnrj6hilyWUOSb9AWtOzX0anIncU',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnY2R6Z2JqYWlhYW5rdHhyanRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDg0MDUsImV4cCI6MjA0MzM4NDQwNX0.Zx8UIDlJq38rbL4Mnrj6hilyWUOSb9AWtOzX0anIncU',
  },
});
