import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { event_name, event_date, event_time, location, description, status_id } = body

    const { data, error } = await supabase
      .from('event')
      .insert([
        {
          event_name,
          event_date,
          event_time,
          location,
          description,
          status_id
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