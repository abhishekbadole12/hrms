export const PROCESS = {
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV || "DEVELOPMENT",
  //
  DB: {
    HOST: process.env.NEXT_PUBLIC_DB_HOST || "localhost",
    PORT: process.env.NEXT_PUBLIC_DB_PORT || 27017,
    NAME: process.env.NEXT_PUBLIC_DB_NAME || "mydatabase",
    USER: process.env.NEXT_PUBLIC_DB_USER || "myuser",
    PASSWORD: process.env.NEXT_PUBLIC_DB_PASSWORD || "default",
  },
  JWT: {
    SECRET: process.env.NEXT_PUBLIC_JWT_SECRET || "default_secret",
  },
};
