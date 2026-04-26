import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle>PetroLúmen</CardTitle>
                <CardDescription>Preview of the desktop UI</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4">
              <Badge>Desktop</Badge>
              <p className="mt-2 text-sm text-muted-foreground">This page uses shared UI primitives from the repo.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
