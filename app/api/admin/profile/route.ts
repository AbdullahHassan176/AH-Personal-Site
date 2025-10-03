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
      return NextResponse.json({ 
        error: 'Missing required fields: fullName and headline are required' 
      }, { status: 400 })
    }

    // Check if data directory exists
    if (!fs.existsSync(dataDir)) {
      return NextResponse.json({ 
        error: 'Data directory does not exist. Please ensure the /data folder is created.' 
      }, { status: 500 })
    }

    // Save to file
    const filePath = path.join(dataDir, 'profile.json')
    
    // Ensure the file is writable
    try {
      fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf8')
    } catch (writeError) {
      console.error('File write error:', writeError)
      return NextResponse.json({ 
        error: `Failed to write to file: ${writeError instanceof Error ? writeError.message : 'Unknown write error'}` 
      }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Profile updated successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Profile API error:', error)
    return NextResponse.json({ 
      error: `Server error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 })
  }
}
