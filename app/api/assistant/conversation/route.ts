import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const assistantId = process.env.ASSISTANT_ID; // secure it by not exposing it publicly

    const response = await axios.post(
      `https://api.openai.com/v1/assistants/${assistantId}/messages`,
      {
        content: message,
        role: 'user',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const { reply } = response.data;

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending message:', error.response?.data || error.message);
    return NextResponse.json(
      { message: 'Error sending message', error: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
