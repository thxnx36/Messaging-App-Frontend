// frontend/src/app/api/login/route.js
import connectDB from '@backend/db'; // เชื่อมต่อฐานข้อมูล
import User from '@models/User'; // นำเข้าโมเดลผู้ใช้

export async function POST(request) {
    await connectDB(); // เชื่อมต่อกับ MongoDB

    const data = await request.json();
    const { email, password } = data;

    // ค้นหาผู้ใช้ในฐานข้อมูล
    const user = await User.findOne({ email });
    
    // ตรวจสอบว่าผู้ใช้มีอยู่และรหัสผ่านถูกต้อง
    if (user && (await user.comparePassword(password))) {
        return new Response(JSON.stringify({ message: 'Login successful' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } else {
        return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
