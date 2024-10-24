// frontend/src/app/api/register/route.js

export async function POST(request) {
    const data = await request.json();

    // จัดการข้อมูลการลงทะเบียนที่นี่
    // เช่นบันทึกไปยังฐานข้อมูล

    return new Response(JSON.stringify({ message: 'User registered' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
