import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')

export async function GET() {
  try {
    const filePath = path.join(dataDir, 'profile.json')
    const data = fs.readFileSync(filePath, 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load profile data' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.fullName || !body.headline) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save to file
    const filePath = path.join(dataDir, 'profile.json')
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2))
    
    return NextResponse.json({ success: true, message: 'Profile updated successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save profile data' }, { status: 500 })
  }
}
