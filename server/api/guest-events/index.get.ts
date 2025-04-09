import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const guest_id = query.guest_id

    if (!guest_id) {
      throw new Error('Guest ID is required')
    }

    const { data, error } = await supabase
      .from('guest_event')
      .select(`
        event_id,
        invitation_status_id,
        event (
          event_id,
          event_name,
          event_date,
          event_time,
          location,
          description
        )
      `)
      .eq('guest_id', guest_id)
      .order('created_at', { ascending: false })

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}) 