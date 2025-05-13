# Note: 
> App run to Cloudflare Worker environment and does not use Node.js runtime. Therefore, "pnpm build" is only used for deploy. If you want to start production mode without deploying, you can try running it in development mode with  "--remote" flag.


# **Steps to Run the App**

## **Step 1: Installation Wrangler**
```bash
  pnpm add -g wrangler@4.14.4
```
---
## **Step 2: Login with Wrangler**
```bash
  wrangler login
```
---
## **Step 3: Create database**
  ```bash
  wrangler d1 create drizzle-d1-demo
  ```
  ***Note: After create database, you should update `wrangler.jsonc`:*** 
  ```json
	{
		"binding": "<your binding env>",
		"database_name": "<database name>",
		"database_id": "<your database id generated>",
		"migrations_dir": "<folder miragtions>"
	}
  ```
---
## **Step 4: Create file `drizzle.config.ts`**
  ```ts
    import type { Config } from 'drizzle-kit';

    export default {
      schema: './src/stores/schemas', // your schemas 
      out: './migrations', // folder miragtions
      dialect: 'sqlite', // requirment
      driver: 'd1-http', // if use d1, can change it if use an other database
      dbCredentials: {
        accountId: '<your account id>', // your account Id on Cloudflare workers
        databaseId: '<your database id on step 3>', // your database id generated of step 3
        token: '<your token>', // your token on Cloudflare workers (config into profile)
      },
    } satisfies Config;
  ```
---

## **Step 5: Follow with these commands**

1. **Install Packages:**
   ```bash
   pnpm i
   ```
2. **Create table, miragtion:**
    - Create table: 
      ```bash
      pnpm load:db
      ```
    - Miragtion: 
      ```bash
      pnpm miragte:db
      ```
3. **Start apps:**
    - For development:
      ```bash
      pnpm start:dev
      ```
    - For local:
      ```bash
      pnpm start:local
      ```
4. **Deploy app:**
   ```bash
   pnpm deploy:drizzle
   ```
---

# **API Routes and Steps for Drizzle D1 Demo**

## **1. List Users**
- **Endpoint:** `/list-users`
- **Method:** `GET`

## **2. Create User**
- **Endpoint:** `/create-user`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
   "name": "<YOUR NAME>",
   "age": 0
  }
  ```
## **3. Update User**
- **Endpoint:** `/update-user`
- **Method:** `PUT`
- **Request Params:**
  ```ts
  "userId": x
  ```
- **Request Body:**
  ```json
  {
   "name": "<YOUR NAME>",
   "age": 0
  }
  ```
## **4. Delete One User**
- **Endpoint:** `/delete-one-user`
- **Method:** `DELETE`
- **Request Params:**
  ```ts
  "userId": x
  ```

## **5. Delete All Users**
- **Endpoint:** `/delete-all-users`
- **Method:** `DELETE`