'use client'
import { useCallback, useEffect, useState } from 'react'
import { Database } from '@/utils/database.types'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Avatar from './avatar'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"




export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id as string)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null
    fullname: string | null
    website: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center items-center h-full w-full mt-6'>
      <Card className="flex flex-col justify-center md:w-2/3 md:max-w-xl items-center form-widget">
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl'>Account Page</CardTitle>
          <CardDescription className='text-base md:text-lg'>Please Fill in your account with the correct information.</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-2 text-base  md:w-2/3'>
        <div className='flex justify-center text-center'>
        <Avatar
          uid={user?.id as string}
          url={avatar_url}
          size={250}
          onUpload={(url) => {
            setAvatarUrl(url)
            updateProfile({ fullname, username, website, avatar_url: url })
          }}
        />
        </div>
        <div>
          
        </div>
          <div className='flex items-center justify-between'>
            <label htmlFor="email">Email:</label>
            <input className='p-1' id="email" type="text" value={session?.user.email} disabled />
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor="fullName">Full Name:</label>
            <input
              className='p-1'
              id="fullName"
              type="text"
              value={fullname || ''}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor="username">Username:</label>
            <input
              className='p-1'
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-widget">

      </div>
          <div className='flex items-center justify-between'>
            <label htmlFor="website">Website:</label>
            <input
              className='p-1'
              id="website"
              type="url"
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <Button
              variant="default"
              className="button primary text-lg flex items-center justify-center"
              onClick={() => updateProfile({ fullname, username, website, avatar_url })}
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Update'}
            </Button>
          </div>
        </CardContent>

        <CardFooter>
          <form action="/auth/signout" method="post">
          <Button variant="outline" className='button text-xl flex items-center justify-center' type='submit'>Sign Out</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}