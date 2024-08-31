import { NextResponse } from 'next/server';
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(request: Request) {
  const { name, email, phone } = await request.json();

  try {
    const docRef = await addDoc(collection(db, 'contacts'), { name, email, phone });
    console.log('Document written with ID: ', docRef.id);
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error adding document: ', error);
    return NextResponse.json({ error: 'Error submitting form' }, { status: 500 });
  }
}
