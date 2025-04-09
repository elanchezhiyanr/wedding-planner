import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const group_id = query.group_id

    if (!group_id) {
      throw new Error('Group ID is required')
    }

    const { data, error } = await supabase
      .from('group_event')
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
      .eq('group_id', group_id)
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