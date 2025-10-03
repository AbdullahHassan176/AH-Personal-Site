import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const dataDir = path.join(process.cwd(), 'data')

export async function GET() {
  try {
    const filePath = path.join(dataDir, 'skills.yaml')
    const data = fs.readFileSync(filePath, 'utf-8')
    return NextResponse.json(yaml.load(data))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load skills data' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Save to YAML file
    const filePath = path.join(dataDir, 'skills.yaml')
    const yamlData = yaml.dump(body, { indent: 2 })
    fs.writeFileSync(filePath, yamlData)
    
    return NextResponse.json({ success: true, message: 'Skills updated successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save skills data' }, { status: 500 })
  }
}
