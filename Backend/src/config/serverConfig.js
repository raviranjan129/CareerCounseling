
import dotenv from 'dotenv';

dotenv.config()

export const DB_URL=process.env.DB_URL

export const MAIL_ID=process.env.MAIL_ID
export const PORT=process.env.PORT
export const MAIL_PASSWORD=process.env.MAIL_PASSWORD

export const ENABLE_EMAIL_VERIFICATION=process.env.ENABLE_EMAIL_VERIFICATION || false