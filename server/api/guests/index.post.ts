import { supabase } from '~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, phone, address, group_id, dietary_preferences, notes, rsvp_status_id } = body

    const { data, error } = await supabase
      .from('guest')
      .insert([
        {
          name,
          email,
          phone,
          address,
          group_id,
          dietary_preferences,
          notes,
          rsvp_status_id
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