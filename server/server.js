import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

//App Config
const PORT = process.env.PORT || 4000
const app=express()
await connectDB()

//Initialize Middleware
app.use(express.json());
app.use(cors())
app.use('/api/image',imageRouter)


//API routes
app.get('/',(req,res)=>
    res.send("API is Working")
)
app.use('/api/user',userRouter)
app.listen(PORT,()=>console.log("Server is running on Port" + PORT))