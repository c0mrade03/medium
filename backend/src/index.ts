import { Hono } from 'hono'

const app = new Hono()

// const postgresurl = "postgresql://devpsk03:qC2oliQkg3Gx@ep-gentle-hall-51602783.us-east-2.aws.neon.tech/firstDB?sslmode=require";
// const DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMjdlNDY5NmEtY2Q1OS00MDBhLTkyYWYtM2QwYTNhYjFiMGRiIiwidGVuYW50X2lkIjoiOWRlYjYzNDQwMjVlNWQ1YjJlNzFhYWUwMWY1N2ZhZWExM2JjZDM5M2RhODRjNWFkNGJkNGU4NWYwMDliNmJmZCIsImludGVybmFsX3NlY3JldCI6IjIwMjJiMDAxLTRmZWQtNGEwYS04ZjQ1LTk2YWM2YzRmYmQyMiJ9.PkGoAGJEBdJa9PsmPBodlpxRL19S2zWfaQEw1CZaMjM";

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('api/v1/signup', (c) => {
  return c.text('Hello Hono!')
})

app.post('api/v1/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
