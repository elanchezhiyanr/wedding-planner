import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { guest_id, event_id, invitation_status_id } = body

    const { data, error } = await supabase
      .from('guest_event')
      .insert([
        {
          guest_id,
          event_id,
          invitation_status_id
        }
      ])
      .select()

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}) 