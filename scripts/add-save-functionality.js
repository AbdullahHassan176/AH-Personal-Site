// Script to add save functionality to admin editors
const fs = require('fs');
const path = require('path');

const editors = [
  'AdminSkillsEditor',
  'AdminWritingEditor', 
  'AdminContactEditor'
];

const saveFunctionality = `
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const response = await fetch('/api/admin/${editor.toLowerCase()}')
      if (response.ok) {
        const data = await response.json()
        setData(data)
        setIsLoading(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    try {
      if (typeof window !== 'undefined') {
        const localData = localStorage.getItem('admin_${editor.toLowerCase()}_data')
        if (localData) {
          setData(JSON.parse(localData))
          setIsLoading(false)
          return
        }
      }
    } catch (error) {
      console.log('No localStorage data found')
    }

    setIsLoading(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    setSaveStatus('idle')
    setError('')

    try {
      const response = await fetch('/api/admin/${editor.toLowerCase()}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        setSaveStatus('success')
        console.log('${editor} saved successfully via API:', result)
        setIsSaving(false)
        return
      }
    } catch (error) {
      console.log('API not available, using localStorage fallback')
    }

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_${editor.toLowerCase()}_data', JSON.stringify(data))
        setSaveStatus('success')
        console.log('${editor} saved to localStorage (static export mode)')
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error)
      setSaveStatus('error')
      setError('Failed to save ${editor.toLowerCase()}. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }`;

console.log('Save functionality template created for:', editors);
